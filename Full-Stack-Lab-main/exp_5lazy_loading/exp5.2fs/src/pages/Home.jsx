export default function Home() {
  return (
    <section className="card">
      <h1>Home</h1>
      <p>
        Welcome to Experiment 5.2. Each page is loaded lazily using React.lazy
        and Suspense to improve performance.
      </p>
      <ul className="list">
        <li>Route-based lazy loading</li>
        <li>Suspense fallback while loading</li>
        <li>Simple navigation for SPA</li>
      </ul>
    </section>
  );
}
