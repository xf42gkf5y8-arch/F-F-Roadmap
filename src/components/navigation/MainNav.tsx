import { NavLink } from 'react-router-dom';

const navItems = [
  ['Home', '/'],
  ['Roadmap', '/roadmap'],
  ['Updates', '/updates'],
  ['Maps', '/maps'],
  ['Fish', '/fish'],
  ['Wild', '/wild'],
  ['Development', '/development'],
  ['Changelog', '/changelog'],
] as const;

export function MainNav() {
  return (
    <nav className="main-nav" aria-label="Primary navigation">
      {navItems.map(([label, to]) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `main-nav__link${isActive ? ' is-active' : ''}`}
          end={to === '/'}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
