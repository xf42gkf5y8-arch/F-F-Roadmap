import { Link, Outlet } from 'react-router-dom';
import { AmbientBackdrop } from '../ui/AmbientBackdrop';
import { MainNav } from '../navigation/MainNav';

export function SiteShell() {
  return (
    <div className="site-shell">
      <AmbientBackdrop />
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Feed and Grow expansion roadmap home">
          <span className="brand__mark" aria-hidden="true">F&amp;G</span>
          <span className="brand__text">EXPANSION ROADMAP</span>
        </Link>
        <MainNav />
        <span className="site-header__signal" aria-label="Roadmap online">LIVE</span>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <span>Feed and Grow: Fish Expansion Project</span>
        <span>Public development roadmap</span>
      </footer>
    </div>
  );
}
