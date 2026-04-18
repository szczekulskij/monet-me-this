import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { generateMonet } from '../api';

export default function GeneratorPage() {
  const [original, setOriginal] = useState(null);
  const [generated, setGenerated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = useCallback(async (files) => {
    if (!files.length) return;
    const file = files[0];
    const preview = URL.createObjectURL(file);
    setOriginal(preview);
    setGenerated(null);
    setError(null);
    setLoading(true);

    try {
      const result = await generateMonet(file);
      setGenerated(result);
    } catch {
      setError('Generation failed. Is the backend running?');
    } finally {
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    maxFiles: 1,
    onDrop,
  });

  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col items-center justify-center px-4 py-12">
      <h1 className="font-display text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        Generate a <span className="text-[var(--color-gold)]">Monet</span>
      </h1>
      <p className="mt-3 text-center text-gray-400">
        Upload any photo and our CycleGAN will transform it into a Monet-style painting.
      </p>

      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`mt-10 flex w-full max-w-lg cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-12 text-center transition-colors ${
          isDragActive
            ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/5'
            : 'border-white/20 hover:border-white/40'
        }`}
      >
        <input {...getInputProps()} />
        <svg className="mb-3 h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
        <p className="text-sm text-gray-400">
          {isDragActive ? 'Drop it here…' : 'Drag & drop an image, or click to browse'}
        </p>
      </div>

      {/* Results */}
      {(original || generated) && (
        <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Original */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">Original</span>
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={original} alt="Original upload" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>

          {/* Arrow (desktop) */}
          <div className="hidden items-center justify-center sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
            <span className="text-3xl text-[var(--color-gold)]">→</span>
          </div>

          {/* Generated */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">Monet Style</span>
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
              {loading ? (
                <div className="flex aspect-[4/3] w-full items-center justify-center bg-[var(--color-dark-card)]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-gold)] border-t-transparent" />
                    <span className="text-sm text-gray-400">Painting in progress…</span>
                  </div>
                </div>
              ) : generated ? (
                <img src={generated} alt="Monet-style result" className="aspect-[4/3] w-full object-cover" />
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center bg-[var(--color-dark-card)]">
                  <span className="text-sm text-gray-500">Awaiting transformation…</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {error && <p className="mt-6 text-sm text-red-400">{error}</p>}
    </div>
  );
}
