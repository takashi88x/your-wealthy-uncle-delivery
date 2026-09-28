const products = {
  "first-10k": {
    eyebrow: "THE FIRST $10K SYSTEM",
    title: "Your system is ready.",
    description:
      "Start with the complete 90-day money reset system designed to help you take control of your spending, saving, debt, and path toward your first $10,000.",
    file: "/downloads/first-10k-system.pdf",
    button: "DOWNLOAD THE FIRST $10K SYSTEM",
    note: "PDF • Your Wealthy Uncle",
  },
  "money-tracker": {
    eyebrow: "THE FIRST $10K MONEY TRACKER",
    title: "Your tracker is ready.",
    description:
      "Use this simple dashboard alongside The First $10K System to organize your income, expenses, savings, and progress toward $10,000.",
    file: "/downloads/money-tracker.xlsx",
    button: "DOWNLOAD MONEY TRACKER",
    note: "XLSX • Your Wealthy Uncle",
  },
  "90-day-reset": {
    eyebrow: "THE 90-DAY MONEY RESET",
    title: "Your 90-day reset starts now.",
    description:
      "A practical 90-day action plan to turn the system into weekly action, build better money habits, and keep moving toward your first $10,000.",
    file: "/downloads/90-day-money-reset.pdf",
    button: "DOWNLOAD THE 90-DAY RESET",
    note: "PDF • Your Wealthy Uncle",
  },
};

export default function DownloadPage({ params }) {
  const product = products[params.product] || products["first-10k"];

  return (
    <main className="page">
      <section className="card">
        <div className="mark">YWU</div>
        <div className="eyebrow">{product.eyebrow}</div>
        <h1>{product.title}</h1>
        <p className="description">{product.description}</p>

        <a className="download" href={product.file} download>
          {product.button}
          <span>↓</span>
        </a>

        <div className="meta">{product.note}</div>

        <div className="divider" />

        <p className="footer-copy">
          Keep this page bookmarked. Your money system works best when you use it consistently.
        </p>
        <div className="brand">YOUR WEALTHY UNCLE</div>
        <div className="tagline">BUILD YOUR FIRST $10K.</div>
      </section>
    </main>
  );
}
