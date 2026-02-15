import { lazy, Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';

const lazyWithDelay = (importer, delayMs = 1200) =>
  lazy(() =>
    Promise.all([
      importer(),
      new Promise((resolve) => setTimeout(resolve, delayMs)),
    ]).then(([module]) => module)
  );

const Home = lazyWithDelay(() => import('./pages/Home.jsx'));
const Dashboard = lazyWithDelay(() => import('./pages/Dashboard.jsx'));
const About = lazyWithDelay(() => import('./pages/About.jsx'));
const Contact = lazyWithDelay(() => import('./pages/Contact.jsx'));

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function AppLayout() {
  const location = useLocation();

  return (
    <>
      <header className="app-header">
        <div className="brand">Exp 5.2</div>
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="app-main">
        <Suspense key={location.pathname} fallback={<div className="loader">Loading...</div>}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
