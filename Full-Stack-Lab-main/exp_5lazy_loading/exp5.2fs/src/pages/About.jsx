export default function About() {
  return (
    <section className="card">
      <h1>About</h1>
      <p>
        This page is lazily loaded only when the user navigates here, which
        reduces initial bundle size and improves startup performance.
      </p>
    </section>
  );
}
