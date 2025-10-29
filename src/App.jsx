import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { ProjectDetail } from './components/ProjectDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      {/* Optional catch-all */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
