const TIMELINE = [
  { year: '1840', title: 'Born in Paris', text: 'Oscar-Claude Monet was born on 14 November 1840 in Paris, the second son of Claude Adolphe Monet and Louise Justine Aubrée.' },
  { year: '1859', title: 'Early Studies', text: 'Monet moved to Paris to pursue art, enrolling at the Académie Suisse and later studying under Charles Gleyre alongside Renoir, Sisley, and Bazille.' },
  { year: '1872', title: 'Impression, Sunrise', text: 'Monet painted "Impression, soleil levant" at Le Havre — the work that would give the Impressionist movement its name when critics used the title mockingly.' },
  { year: '1883', title: 'Giverny', text: 'Monet settled in Giverny, where he designed elaborate gardens that became the primary subject of his later paintings, including the famous water lily series.' },
  { year: '1890s', title: 'Series Paintings', text: 'He began painting subjects in series — Haystacks, Rouen Cathedral, Poplars — capturing the same scene under different light and weather conditions.' },
  { year: '1899', title: 'Water Lilies Begin', text: 'Monet started his iconic Water Lilies series (Nymphéas), which would eventually comprise around 250 oil paintings spanning the last 30 years of his life.' },
  { year: '1926', title: 'Legacy', text: 'Monet passed away on 5 December 1926 at Giverny. His commitment to capturing light and atmosphere fundamentally changed the course of modern art.' },
];

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      {/* Hero */}
      <div className="mb-16 text-center">
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Claude <span className="text-[var(--color-gold)]">Monet</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          A key figure in the Impressionist movement that transformed French painting
          in the second half of the nineteenth century.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--color-gold)] via-[var(--color-gold)]/40 to-transparent sm:left-1/2 sm:block" />

        <div className="flex flex-col gap-12">
          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={`relative flex flex-col gap-4 sm:flex-row sm:gap-0 ${
                i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                <span className="font-display text-sm font-semibold text-[var(--color-gold)]">
                  {item.year}
                </span>
                <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.text}</p>
              </div>

              {/* Dot */}
              <div className="absolute left-4 top-1 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--color-gold)] ring-4 ring-[var(--color-dark)] sm:left-1/2 sm:block" />

              {/* Spacer for the other side */}
              <div className="hidden flex-1 sm:block" />
            </div>
          ))}
        </div>
      </div>

      {/* Fun fact */}
      <div className="mt-20 rounded-2xl bg-[var(--color-dark-card)] p-8 text-center ring-1 ring-white/10">
        <p className="font-display text-lg text-[var(--color-gold)]">Did you know?</p>
        <p className="mt-2 text-gray-400">
          Monet's Water Lilies series comprises around 250 paintings. The large-scale murals
          are displayed in the Musée de l'Orangerie in Paris, installed according to Monet's own design.
        </p>
      </div>
    </div>
  );
}
