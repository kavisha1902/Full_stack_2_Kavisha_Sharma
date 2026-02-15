export default function Dashboard() {
  return (
    <section className="card">
      <h1>Dashboard</h1>
      <p>Overview of key metrics and learning progress.</p>
      <div className="grid">
        <div className="tile">
          <h3>React</h3>
          <p>Component-driven UI</p>
        </div>
        <div className="tile">
          <h3>Routing</h3>
          <p>Client-side navigation</p>
        </div>
        <div className="tile">
          <h3>Lazy Loading</h3>
          <p>Load only what you need</p>
        </div>
      </div>
    </section>
  );
}
