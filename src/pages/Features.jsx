import "../styles/features.css";

const featuresList = [
  {
    title: "AI Ad Automation",
    desc: "Automatically manages and optimizes your ad campaigns without manual effort.",
  },
  {
    title: "Smart Budget Allocation",
    desc: "Moves your budget to the best-performing ads in real time.",
  },
  {
    title: "Performance Monitoring",
    desc: "Tracks campaign performance continuously to catch issues early.",
  },
  {
    title: "Creative Optimization",
    desc: "Identifies winning creatives and pauses low-performing ones.",
  },
  {
    title: "Account Audits",
    desc: "Finds wasted spend and optimization opportunities automatically.",
  },
  {
    title: "Scalable Campaigns",
    desc: "Helps scale successful campaigns while maintaining efficiency.",
  },
];

function Features() {
  return (
    <section className="features-page">
      <div className="container">
        {/* PAGE HEADER */}
        <header className="features-header">
          <h1>Powerful Features Built for Growth</h1>
          <p>
            Ryze automates the boring, repetitive work so your ads perform
            better every single day.
          </p>
        </header>

        {/* FEATURES GRID */}
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div className="feature-item" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="features-cta">
          <h2>Ready to put your ads on autopilot?</h2>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Features;
