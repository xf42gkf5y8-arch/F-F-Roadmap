import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteShell } from './components/layout/SiteShell';
import { Changelog } from './pages/Changelog';
import { Development } from './pages/Development';
import { Fish } from './pages/Fish';
import { Home } from './pages/Home';
import { Maps } from './pages/Maps';
import { Roadmap } from './pages/Roadmap';
import { Updates } from './pages/Updates';
import { Wild } from './pages/Wild';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<Home />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="updates" element={<Updates />} />
        <Route path="maps" element={<Maps />} />
        <Route path="fish" element={<Fish />} />
        <Route path="wild" element={<Wild />} />
        <Route path="development" element={<Development />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
