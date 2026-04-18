import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GamePage from './pages/GamePage';
import GeneratorPage from './pages/GeneratorPage';
import HistoryPage from './pages/HistoryPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<GamePage />} />
        <Route path="generator" element={<GeneratorPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
