import "../styles/home.css";

const features = [
  {
    title: "AI Ad Automation",
    desc: "Automatically manages and optimizes your ad campaigns 24/7.",
  },
  {
    title: "Smart Budget Control",
    desc: "Allocates budget to what’s performing best in real time.",
  },
  {
    title: "Performance Insights",
    desc: "Clear analytics to understand what’s working and why.",
  },
];

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">
            <span>Let</span>
            <span>AI</span>
            <span>Run</span>
            <span>Your</span>
            <span>Ads</span>
          </h1>
          <p>
            Ryze is an autonomous AI marketer that manages, optimizes, and
            scales your paid ads automatically.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Book a Demo</button>
          </div>
        </div>
      </section>

      {/* FEATURES PREVIEW */}
      <section className="features-preview">
        <div className="container">
          <h2 className="section-title">Key Features</h2>

          <div className="features-grid">
            {features.map((item, index) => (
              <div className="feature-card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>

          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number">01</span>
              <h3>Connect Your Ad Accounts</h3>
              <p>Link your Google, Meta, or other ad platforms in minutes.</p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <h3>AI Optimizes Everything</h3>
              <p>Ryze monitors performance and fixes issues automatically.</p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <h3>Scale What Works</h3>
              <p>Your budget is pushed to the highest performing campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Loved by Marketing Teams</h2>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>
                “Ryze completely changed how we manage ads. The AI handles
                optimization better than our manual workflows.”
              </p>
              <h4>Sarah Johnson</h4>
              <span>Growth Manager</span>
            </div>

            <div className="testimonial-card">
              <p>
                “We saved hours every week and saw better ROAS within the first
                month of using Ryze.”
              </p>
              <h4>David Lee</h4>
              <span>Performance Marketer</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="pricing-preview">
        <div className="container">
          <h2 className="section-title">Simple Pricing</h2>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <p className="price">$49 / month</p>
              <ul>
                <li>Basic AI optimization</li>
                <li>Ad account monitoring</li>
                <li>Email support</li>
              </ul>
              <button className="btn-secondary">Get Started</button>
            </div>

            <div className="pricing-card highlight">
              <h3>Pro</h3>
              <p className="price">$99 / month</p>
              <ul>
                <li>Advanced AI automation</li>
                <li>Budget optimization</li>
                <li>Priority support</li>
              </ul>
              <button className="btn-primary">Get Started</button>
            </div>

            <div className="pricing-card">
              <h3>Enterprise</h3>
              <p className="price">Custom</p>
              <ul>
                <li>Custom AI workflows</li>
                <li>Dedicated support</li>
                <li>Team collaboration</li>
              </ul>
              <button className="btn-secondary">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Scale Your Ads with AI?</h2>
          <p>Let Ryze handle optimization while you focus on growth.</p>
          <button className="btn-primary">Book a Demo</button>
        </div>
      </section>
    </>
  );
}

export default Home;
