const steps = [
  'Install dependencies',
  'Run Prisma migrations and seed the database',
  'Start the dev server',
  'Build chat UI and APIs in later tasks'
];

const models = ['Session', 'Message', 'SourceBlock', 'AtomicNote', 'Flashcard', 'DailyLog'];

export default function HomePage() {
  return (
    <section className="stack">
      <div className="card">
        <h2>Welcome to Note Chat</h2>
        <p>
          This scaffold sets up the app directory, Prisma schema, and seed script for a chat-based learning
          journal. Follow the README to run migrations and start building the MVP features.
        </p>
      </div>
      <div className="card">
        <h3>Core models</h3>
        <ul className="list">
          {models.map((model) => (
            <li key={model}>{model}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h3>Next steps</h3>
        <ol className="list">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
