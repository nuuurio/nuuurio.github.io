import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Home } from './components/Home';
import { ProjectDetail } from './components/ProjectDetail';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
