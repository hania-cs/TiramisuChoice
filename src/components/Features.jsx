"use client"

import { useEffect, useRef } from "react"

const Features = () => {
  const featuresRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const featureCards = featuresRef.current?.querySelectorAll(".feature-card")
    featureCards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: "🇱🇧",
      title: "The Originals",
      description: "First to launch Tiramisu in Lebanon since day one",
    },
    {
      icon: "☕",
      title: "Quality",
      description: "Top quality in every bite and in every tray",
    },
    {
      icon: "🇮🇹",
      title: "Authentic Italian Recipe",
      description: "Authentic Italian taste made with premium ingredients",
    },

    {
      icon: "🍭",
      title: "Our Flavors",
      description: "Four unforgettable flavors. One unbeatable brand and many more on the way",
    },
    {
      icon: "👨‍🍳",
      title: "Handcrafted Daily",
      description: "Each tiramisu is carefully handcrafted by our skilled pastry chefs using traditional techniques.",
    },
    {
      icon: "🚚",
      title: "Fresh Delivery",
      description:
        "We deliver our tiramisu fresh to your door, maintaining the perfect temperature and quality during the same day. Delivery only in Beirut & it's surrounding.",
    },
  ]

  return (
    <section className="features section" ref={featuresRef}>
      <style jsx>{`
        .features {
          background: linear-gradient(135deg, #f8f6f0 0%, #e8e2d5 100%);
          padding: 80px 40px;
          position: relative;
          font-family: 'Georgia', serif;
        }

        .features::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(139, 69, 19, 0.02);
          pointer-events: none;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 2.5rem);
          text-align: center;
          margin-bottom: 20px;
          color: #8B4513;
          font-weight: 300;
          letter-spacing: 1px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .section-subtitle {
          text-align: center;
          color: #6b4423;
          font-size: 1.1rem;
          font-style: italic;
          margin-bottom: 60px;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(30px);
          border: 2px solid rgba(139, 69, 19, 0.1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }

        .feature-card:hover::before {
          left: 100%;
        }
        
        .feature-card.animate-in {
          opacity: 1;
          transform: translateY(0);
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(139, 69, 19, 0.2);
          background: rgba(255, 255, 255, 1);
          border-color: #8B4513;
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1);
        }
        
        .feature-title {
          font-family: 'Georgia', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #2c1810;
          margin-bottom: 15px;
          position: relative;
        }

        .feature-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: #8B4513;
          border-radius: 2px;
        }
        
        .feature-description {
          color: #6b4423;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .features {
            padding: 60px 20px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .feature-card {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="section-title">Why we're number #1 in Lebanon?</h2>
        <p className="section-subtitle">
          We're committed to bringing you the most authentic and delicious tiramisu experience, crafted with passion and
          the finest ingredients.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
