"use client"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src="./image.png"
                alt="Tiramisu Choice"
              />
            </div>
            <p className="footer-description">
              Bringing authentic Italian tiramisu to your doorstep with love, tradition, and the finest ingredients.
            </p>
            
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              
              <li>
                <a href="#menu">Menu</a>
              </li>
              
            </ul>
          </div>
           
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <p>📍 Beirut</p>
              <p>📞 96176740914</p>
            <p><a href="https://www.instagram.com/tiramisuchoice.lb/" >📱 Tiramisu Choice</a></p>

            </div>
          </div>

          
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Coded with ❤️ by Hania Seifeldeen. All rights reserved.</p>
         
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--primary-brown);
          color: var(--white);
          padding: 60px 0 20px;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }
        
        .footer-logo img {
          height: 60px;
          width: auto;
          margin-bottom: 20px;
          filter: brightness(0) invert(1);
        }
        
        .footer-description {
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 20px;
        }
        
        .social-links {
          display: flex;
          gap: 15px;
        }
        
        .social-link {
          display: inline-block;
          font-size: 1.5rem;
          text-decoration: none;
          transition: var(--transition);
        }
        
        .social-link:hover {
          transform: translateY(-3px);
        }
        
        .footer-title {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          margin-bottom: 20px;
          color: var(--golden);
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 10px;
        }
        
        .footer-links a {
          color: var(--white);
          text-decoration: none;
          opacity: 0.9;
          transition: var(--transition);
        }
        
        .footer-links a:hover {
          opacity: 1;
          color: var(--golden);
        }
        
        .contact-info p,
        .hours p {
          margin-bottom: 10px;
          opacity: 0.9;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }
        
        .footer-bottom-links a {
          color: var(--white);
          text-decoration: none;
          opacity: 0.8;
          transition: var(--transition);
        }
        
        .footer-bottom-links a:hover {
          opacity: 1;
          color: var(--golden);
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
