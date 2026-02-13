import { lazy, Suspense } from 'react';

const lazyWithDelay = (importer, delayMs = 600) =>
  lazy(() =>
    Promise.all([
      importer(),
      new Promise((resolve) => setTimeout(resolve, delayMs)),
    ]).then(([module]) => module)
  );

const LazyDashboard = lazyWithDelay(() => import('./components/Dashboard'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyDashboard />
      </Suspense>
    </div>
  );
}

export default App;
