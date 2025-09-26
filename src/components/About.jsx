"use client"

import { useState, useEffect } from "react"

const About = () => {
  const [scrollY, setScrollY] = useState(0)
  const [activeIngredient, setActiveIngredient] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const ingredients = [
    { name: "Mascarpone", origin: "Lombardy, Italy" },
    { name: "Ladyfingers", origin: "Savoiardi Tradizionali" },
    { name: "Espresso", origin: "Arabica Beans" },
    { name: "Cocoa", origin: "Belgian Premium" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 })

    window.addEventListener("scroll", handleScroll)
    const aboutSection = document.getElementById("about")
    if (aboutSection) observer.observe(aboutSection)

    const ingredientTimer = setInterval(() => {
      setActiveIngredient((prev) => (prev + 1) % ingredients.length)
    }, 2500)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
      clearInterval(ingredientTimer)
    }
  }, [])

  return (
    <section className="about section" id="about">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="floating-element"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              transform: `translateY(${scrollY * 0.1 * (i + 1)}px)`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="about-content">
          <div className="hero-section">
            <div className="left-content">
              <h2 className={`section-title ${isVisible ? "animate-in" : ""}`}>
                <span className="word" style={{ animationDelay: "0.1s" }}>
                  Our
                </span>
                <span className="word" style={{ animationDelay: "0.3s" }}>
                  Authentic
                </span>
                <span className="word" style={{ animationDelay: "0.5s" }}>
                  Story
                </span>
              </h2>

              <div className="hero-text">
                <p>
                  Born from a passion for authentic Italian desserts, our tiramisu represents three generations of
                  perfected recipes from the rolling hills of Tuscany.
                </p>
              </div>

              <div className="stats-horizontal">
                <div className={`stat ${isVisible ? "count-up" : ""}`}>
                  <div className="stat-icon">😊</div>
                  <div className="stat-content">
                    <div className="stat-number">10,000+</div>
                    <div className="stat-label">Happy Customers</div>
                  </div>
                </div>
                <div className={`stat ${isVisible ? "count-up" : ""}`}>
                  <div className="stat-icon">⭐</div>
                  <div className="stat-content">
                    <div className="stat-number">5★</div>
                    <div className="stat-label">Average Rating</div>
                  </div>
                </div>
                <div className={`stat ${isVisible ? "count-up" : ""}`}>
                  <div className="stat-icon">🌱</div>
                  <div className="stat-content">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Fresh Daily</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <div className="image-container">
                <div className="sparkles">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="sparkle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                      }}
                    />
                  ))}
                </div>

                <img src="ing.png" alt="Making Tiramisu" />

                <div className="image-overlay">
                  <div className="overlay-content">
                    <div className="chef-badge">
                      <div className="chef-icon">👨‍🍳</div>
                      <div className="badge-text">Master Chef</div>
                    </div>
                    <h3>Handcrafted with Amore</h3>
                    <p>
                      Every tiramisu is a masterpiece, crafted with three generations of Italian passion and precision
                    </p>
                    <div className="authenticity-badges">
                      <span className="badge">🏆 Award Winning</span>
                      <span className="badge">🇮🇹 Authentic Recipe</span>
                      <span className="badge">✋ Hand Made</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="story-cards">
              <div className={`story-card ${isVisible ? "slide-in" : ""}`} style={{ animationDelay: "0.2s" }}>
                <div className="card-icon">🇮🇹</div>
                <h3>Heritage</h3>
                <p>Authentic Italian recipes perfected over three generations in Tuscany.</p>
              </div>

              <div className={`story-card ${isVisible ? "slide-in" : ""}`} style={{ animationDelay: "0.4s" }}>
                <div className="card-icon">👵</div>
                <h3>Tradition</h3>
                <p>Sacred art learned from nonna, preserving centuries-old techniques.</p>
              </div>

              <div className={`story-card ${isVisible ? "slide-in" : ""}`} style={{ animationDelay: "0.6s" }}>
                <div className="card-icon">✨</div>
                <h3>Excellence</h3>
                <p>Finest imported ingredients with time-honored craftsmanship.</p>
              </div>
            </div>

            <div className="ingredients-showcase">
              <h3>Premium Ingredients</h3>
              <div className="ingredient-display">
                <div className="ingredient-name">{ingredients[activeIngredient].name}</div>
                <div className="ingredient-origin">{ingredients[activeIngredient].origin}</div>
                <div className="ingredient-dots">
                  {ingredients.map((_, i) => (
                    <div
                      key={i}
                      className={`dot ${i === activeIngredient ? "active" : ""}`}
                      onClick={() => setActiveIngredient(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: linear-gradient(135deg, #faf7f2 0%, #f5f0e8 50%, #ede4d3 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-element {
          position: absolute;
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, rgba(218, 165, 32, 0.1), rgba(139, 69, 19, 0.1));
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(even) {
          background: linear-gradient(45deg, rgba(160, 82, 45, 0.1), rgba(210, 180, 140, 0.1));
          animation-direction: reverse;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 80px;
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-section {
          display: flex;
          gap: 120px;
          align-items: center;
        }

        .left-content {
          flex: 0 0 45%;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .content-section {
          display: flex;
          flex-direction: row;
          gap: 40px;
          align-items: flex-start;
          justify-content: space-between;
        }

        .story-cards {
          display: flex;
          flex-direction: row;
          gap: 20px;
          flex: 1;
        }

        .story-card {
          background: rgba(255, 255, 255, 0.9);
          padding: 25px;
          border-radius: 12px;
          border-left: 4px solid #daa520;
          box-shadow: 0 4px 15px rgba(139, 69, 19, 0.1);
          transform: translateX(50px);
          opacity: 0;
          transition: all 0.6s ease;
          position: relative;
          overflow: hidden;
          flex: 1;
        }

        .story-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .story-card:hover::before {
          left: 100%;
        }

        .story-card.slide-in {
          transform: translateX(0);
          opacity: 1;
        }

        .card-icon {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .story-card h3 {
          color: #8b4513;
          font-size: 1.1rem;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .story-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
          font-size: 0.9rem;
        }

        .ingredients-showcase {
          background: linear-gradient(135deg, #8b4513, #a0522d);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          color: white;
          flex-shrink: 0;
        }

        .ingredients-showcase h3 {
          margin-bottom: 15px;
          font-size: 1.2rem;
        }

        .ingredient-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .ingredient-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #daa520;
        }

        .ingredient-origin {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .ingredient-dots {
          display: flex;
          gap: 6px;
          margin-top: 12px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #daa520;
          transform: scale(1.2);
        }
        
        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(139, 69, 19, 0.3);
          transform: perspective(1000px) rotateY(-3deg);
          transition: all 0.6s ease;
          width: 100%;
          max-width: 400px;
        }

        .image-container:hover {
          transform: perspective(1000px) rotateY(0deg) scale(1.05);
        }

        .sparkles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #daa520;
          border-radius: 50%;
          animation: sparkle 3s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .image-container img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          transition: all 0.6s ease;
        }
        
        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
          padding: 50px 30px 30px;
          transform: translateY(100%);
          transition: all 0.6s ease;
        }
        
        .image-container:hover .image-overlay {
          transform: translateY(0);
        }

        .overlay-content {
          position: relative;
        }

        .chef-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .chef-icon {
          font-size: 2rem;
          animation: rotate 4s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .badge-text {
          color: #daa520;
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .overlay-content h3 {
          color: white;
          font-family: 'Georgia', serif;
          font-size: 1.5rem;
          margin-bottom: 15px;
          text-align: center;
        }
        
        .overlay-content p {
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 20px 0;
          text-align: center;
          line-height: 1.6;
        }

        .authenticity-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }

        .badge {
          background: rgba(218, 165, 32, 0.2);
          color: #daa520;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(218, 165, 32, 0.3);
        }
        
        .about-image {
          flex: 0 0 55%;
        }
        
        .stats-horizontal {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 20px;
          width: 120%;
          max-width: 600px;
        }

        .stat {
          background: rgba(255, 255, 255, 0.9);
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(139, 69, 19, 0.1);
          border: 2px solid transparent;
          transition: all 0.4s ease;
          transform: translateY(20px);
          opacity: 0;
        }

        .stat.count-up {
          transform: translateY(0);
          opacity: 1;
        }

        .stat:hover {
          transform: translateY(-5px);
          border-color: #daa520;
          box-shadow: 0 8px 25px rgba(218, 165, 32, 0.2);
        }

        .stat-icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 700;
          color: #8b4513;
          margin-bottom: 5px;
        }

        .stat-label {
          color: #666;
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 1200px) {
          .about-content {
            gap: 60px;
            padding: 0 30px;
          }
          
          .hero-section {
            gap: 60px;
          }
          
          .left-content {
            flex: 1;
          }
          
          .about-image {
            flex: 1;
          }
          
          .stats-horizontal {
            width: 100%;
            max-width: none;
          }
        }

        @media (max-width: 992px) {
          .hero-section {
            flex-direction: column;
            gap: 40px;
            text-align: center;
          }
          
          .left-content {
            flex: none;
            width: 100%;
          }
          
          .about-image {
            flex: none;
            width: 100%;
            max-width: 500px;
          }
          
          .content-section {
            flex-direction: column;
            gap: 40px;
          }
          
          .ingredients-showcase {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .about-content {
            gap: 40px;
            padding: 0 20px;
          }
          
          .section-title {
            text-align: center;
            font-size: 2.2rem;
          }
          
          .stats-horizontal {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .story-cards {
            flex-direction: column;
            gap: 20px;
          }
          
          .story-card {
            padding: 20px;
          }
          
          .floating-element {
            width: 40px;
            height: 40px;
          }
          
          .image-container {
            max-width: 100%;
          }
          
          .image-container img {
            height: 280px;
          }
        }

        @media (max-width: 480px) {
          .about-content {
            padding: 0 15px;
            gap: 30px;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .hero-text p {
            font-size: 0.95rem;
          }
          
          .stat {
            padding: 15px;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
          
          .story-card {
            padding: 15px;
          }
          
          .ingredients-showcase {
            padding: 20px;
          }
          
          .ingredient-name {
            font-size: 1.2rem;
          }
          
          .overlay-content h3 {
            font-size: 1.2rem;
          }
          
          .authenticity-badges {
            flex-direction: column;
            align-items: center;
          }
          
          .badge {
            font-size: 0.75rem;
            padding: 4px 10px;
          }
        }
      `}</style>
    </section>
  )
}

export default About
