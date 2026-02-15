export default function Contact() {
  return (
    <section className="card">
      <h1>Contact</h1>
      <p>Get in touch for collaboration or feedback.</p>
      <form className="form">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea rows="4" placeholder="Write a message" />
        </label>
        <button type="button">Send Message</button>
      </form>
    </section>
  );
}
