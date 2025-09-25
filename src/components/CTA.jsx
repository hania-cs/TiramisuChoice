"use client"

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">Ready to Taste the Difference?</h2>
            <p className="cta-description">
              Order your authentic Italian tiramisu today and experience the perfect blend of tradition and taste
              delivered fresh to your door.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary glow" ><a href="https://wa.me/96176740914"></a>Order Now</button>
              <button className="btn btn-secondary">Call Us: 96176740914</button>
            </div>
          </div>

          <div className="cta-features">
            <div className="cta-feature">
              <div className="feature-icon">🚚</div>
              <div className="feature-text">
                <h4>Delivery</h4>
                <p>In Beirut & it’s surrounding</p>
              </div>
            </div>
            <div className="cta-feature">
              <div className="feature-icon">⏰</div>
              <div className="feature-text">
                <h4>Daily Prepared</h4>
                <p>with love</p>
              </div>
            </div>
            <div className="cta-feature">
              <div className="feature-icon">💯</div>
              <div className="feature-text">
                <h4>Satisfaction</h4>
                <p>100% Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta {
          background: linear-gradient(135deg, var(--primary-brown), var(--secondary-brown));
          color: var(--white);
          position: relative;
          overflow: hidden;
        }
        
        .cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/tiramisu-pattern-background.jpg') center/cover;
          opacity: 0.1;
          pointer-events: none;
        }
        
        .cta-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .cta-title {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--white);
        }
        
        .cta-description {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 40px;
          opacity: 0.9;
        }
        
        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }
        
        .cta-buttons .btn-primary {
          background: var(--golden);
          color: var(--primary-brown);
          font-weight: 700;
        }
        
        .cta-buttons .btn-secondary {
          background: transparent;
          color: var(--white);
          border-color: var(--white);
        }
        
        .cta-buttons .btn-secondary:hover {
          background: var(--white);
          color: var(--primary-brown);
        }
        
        .cta-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-top: 40px;
        }
        
        .cta-feature {
          display: flex;
          align-items: center;
          gap: 15px;
          justify-content: center;
        }
        
        .cta-feature .feature-icon {
          font-size: 2rem;
          opacity: 0.9;
        }
        
        .cta-feature h4 {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          margin-bottom: 5px;
          color: var(--white);
        }
        
        .cta-feature p {
          margin: 0;
          opacity: 0.8;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .cta-title {
            font-size: 2.2rem;
          }
          
          .cta-description {
            font-size: 1.1rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-features {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  )
}

export default CTA
