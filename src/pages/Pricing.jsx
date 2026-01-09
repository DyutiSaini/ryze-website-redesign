import "../styles/pricing.css";

function Pricing() {
  return (
    <section className="pricing-page">
      <div className="container">
        {/* PAGE HEADER */}
        <header className="pricing-header">
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose a plan that fits your team. Upgrade or cancel anytime.</p>
        </header>

        {/* PRICING CARDS */}
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Starter</h3>
            <p className="price">$49 / month</p>
            <ul>
              <li>Basic AI optimization</li>
              <li>Campaign monitoring</li>
              <li>Email support</li>
            </ul>
            <button className="btn-secondary">Get Started</button>
          </div>

          <div className="pricing-card highlight">
            <h3>Pro</h3>
            <p className="price">$99 / month</p>
            <ul>
              <li>Advanced AI automation</li>
              <li>Smart budget allocation</li>
              <li>Priority support</li>
            </ul>
            <button className="btn-primary">Get Started</button>
          </div>

          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <ul>
              <li>Custom workflows</li>
              <li>Dedicated account manager</li>
              <li>Team collaboration</li>
            </ul>
            <button className="btn-secondary">Contact Sales</button>
          </div>
        </div>

        {/* FAQ */}
        <div className="pricing-faq">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h4>Is there a free trial?</h4>
            <p>Yes, you can try Ryze risk-free before committing.</p>
          </div>

          <div className="faq-item">
            <h4>Can I cancel anytime?</h4>
            <p>
              Absolutely. You can upgrade, downgrade, or cancel whenever you
              want.
            </p>
          </div>

          <div className="faq-item">
            <h4>Is my data secure?</h4>
            <p>Yes, security and privacy are our top priorities.</p>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="pricing-cta">
          <h2>Ready to get started?</h2>
          <button className="btn-primary">Book a Demo</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
