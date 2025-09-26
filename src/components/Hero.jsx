"use client"

import { useState, useEffect, useRef } from "react"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef(null)

  const slides = [
    {
      title: "Authentic Italian Tiramisu",
      subtitle: "Handcrafted with Love & Tradition",
      description:
        "Experience the perfect blend of coffee-soaked ladyfingers, rich mascarpone, and delicate cocoa powder in every heavenly bite.",
      accent: "Authenticity",
    },
    {
      title: "Premium Ingredients Only",
      subtitle: "Quality You Can Taste",
      description:
        "We source the finest mascarpone, authentic Italian coffee, and premium cocoa to create an unforgettable dessert experience.",
      accent: "Premium",
    },
    {
      title: "Made Fresh Daily",
      subtitle: "Taste the Difference",
      description:
        "Our tiramisu is prepared fresh every morning using traditional recipes passed down through generations of Italian artisans.",
      accent: "Fresh",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      return () => heroElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Dynamic Background Layers */}
      <div className="background-layers">
        <div
          className="gradient-orb orb-1"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 15}px)`,
          }}
        ></div>
        <div
          className="gradient-orb orb-2"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 20}px)`,
          }}
        ></div>
        <div
          className="gradient-orb orb-3"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * -10}px)`,
          }}
        ></div>

        {/* Animated Pattern */}
        <div className="pattern-overlay">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="pattern-dot"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Main Content Grid */}
        <div className="hero-grid">
          {/* Left Content Panel */}
          <div className="content-panel">
            <div className="accent-badge">
              <span className="accent-text">{slides[currentSlide].accent}</span>
              <div className="badge-glow"></div>
            </div>

            <div className="text-content">
              <h1 className={`hero-title ${isLoaded ? "animate-in" : ""}`}>
                <span className="title-line">{slides[currentSlide].title.split(" ").slice(0, 2).join(" ")}</span>
                <span className="title-line accent-line">
                  {slides[currentSlide].title.split(" ").slice(2).join(" ")}
                </span>
              </h1>

              <h2 className="hero-subtitle">{slides[currentSlide].subtitle}</h2>

              <p className="hero-description">{slides[currentSlide].description}</p>

              <div className="cta-section">
                <button className="btn-primary glow-hover">
                  <span>Order Now</span>
                  <div className="btn-particles"></div>
                </button>
                <button className="btn-secondary glass-effect">
                  <a className="btn-link" href="/Menu">
                    <span>View Menu</span>
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Panel */}
          <div className="visual-panel">
            <div className="image-container">
              <div className="floating-frame">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5eC6OchQw3T7XJ9oAZ6vdliJWhlWWv.png"
                  alt="Premium Tiramisu"
                  className="hero-image"
                />
                <div className="image-glow"></div>
              </div>

              {/* Decorative Elements */}
              <div className="deco-elements">
                <div className="coffee-steam steam-1"></div>
                <div className="coffee-steam steam-2"></div>
                <div className="coffee-steam steam-3"></div>
                <div className="sparkle sparkle-1">✦</div>
                <div className="sparkle sparkle-2">✧</div>
                <div className="sparkle sparkle-3">✦</div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Progress Indicators */}
        <div className="slide-progress">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`progress-bar ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="progress-fill"></div>
              <span className="progress-label">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
      .btn-secondary a, .btn-secondary a:visited {
  color: #654321;
  text-decoration: none;
  display: inline-block;
 
}

        .hero {
          min-height: 100vh;
          position: relative;
          background: linear-gradient(135deg, #fdfcf8 0%, #f8f4e6 50%, #f5f1e8 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
        }
        
        .background-layers {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.1;
          transition: transform 0.3s ease-out;
        }
        
        .orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #8B4513, #D2691E);
          top: 10%;
          right: 20%;
          animation: pulse 4s ease-in-out infinite;
        }
        
        .orb-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #DAA520, #FFD700);
          bottom: 20%;
          left: 10%;
          animation: pulse 3s ease-in-out infinite 1s;
        }
        
        .orb-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #CD853F, #DEB887);
          top: 50%;
          left: 50%;
          animation: pulse 5s ease-in-out infinite 2s;
        }
        
        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .pattern-dot {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(139, 69, 19, 0.15);
          border-radius: 50%;
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
          min-height: 70vh;
          position: relative;
          z-index: 2;
        }
        
        .content-panel {
          position: relative;
        }
        
        .accent-badge {
          position: relative;
          display: inline-block;
          padding: 8px 24px;
          border-radius: 30px;
          background: rgba(218, 165, 32, 0.1);
          border: 1px solid rgba(218, 165, 32, 0.3);
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
          overflow: hidden;
        }
        
        .accent-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: #DAA520;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          z-index: 2;
        }
        
        .badge-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.2), transparent);
          animation: badge-shine 3s ease-in-out infinite;
        }
        
        .text-content {
          position: relative;
        }
        
        .hero-title {
          font-size: 4.2rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          overflow: hidden;
        }
        
        .title-line {
          display: block;
          color: #2c1810;
          transform: translateY(100px);
          opacity: 0;
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .title-line:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .accent-line {
          background: linear-gradient(135deg, #DAA520, #FFD700, #F4A460);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.4rem;
          color: #8B4513;
          font-weight: 400;
          margin-bottom: 25px;
          font-style: italic;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }
        
        .hero-description {
          font-size: 1.1rem;
          color: #5d4e37;
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 500px;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.6s forwards;
        }
        
        .cta-section {
          display: flex;
          gap: 20px;
          align-items: center;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.8s forwards;
        }
        
        .btn-primary {
          position: relative;
          padding: 16px 32px;
          background: linear-gradient(135deg, #8B4513, #A0522D);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(139, 69, 19, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(139, 69, 19, 0.4);
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        .btn-secondary {
          padding: 16px 32px;
          background: rgba(255, 255, 255, 0.15);
          color: #2c1810;
          border: 1px solid rgba(139, 69, 19, 0.2);
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(139, 69, 19, 0.4);
          transform: translateY(-1px);
        }
        
        .visual-panel {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .image-container {
          position: relative;
          width: 100%;
          max-width: 450px;
        }
        
        .floating-frame {
          position: relative;
          animation: float 6s ease-in-out infinite;
        }
        
        .hero-image {
          width: 100%;
          height: auto;
          border-radius: 20px;
          filter: drop-shadow(0 25px 50px rgba(139, 69, 19, 0.15));
          transition: transform 0.3s ease;
        }
        
        .hero-image:hover {
          transform: scale(1.02);
        }
        
        .image-glow {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: linear-gradient(45deg, rgba(218, 165, 32, 0.1), rgba(139, 69, 19, 0.1));
          border-radius: 30px;
          z-index: -1;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .deco-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .coffee-steam {
          position: absolute;
          width: 4px;
          height: 40px;
          background: linear-gradient(to top, transparent, rgba(139, 69, 19, 0.3), transparent);
          border-radius: 2px;
          animation: steam 2s ease-in-out infinite;
        }
        
        .steam-1 {
          top: -30px;
          left: 20%;
          animation-delay: 0s;
        }
        
        .steam-2 {
          top: -35px;
          left: 30%;
          animation-delay: 0.7s;
        }
        
        .steam-3 {
          top: -25px;
          left: 40%;
          animation-delay: 1.4s;
        }
        
        .sparkle {
          position: absolute;
          font-size: 20px;
          color: #FFD700;
          animation: sparkle 3s ease-in-out infinite;
        }
        
        .sparkle-1 {
          top: 15%;
          right: 10%;
          animation-delay: 0s;
        }
        
        .sparkle-2 {
          top: 40%;
          right: -5%;
          animation-delay: 1s;
        }
        
        .sparkle-3 {
          bottom: 20%;
          left: -5%;
          animation-delay: 2s;
        }
        
        .slide-progress {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 30px;
          align-items: center;
        }
        
        .progress-bar {
          position: relative;
          width: 60px;
          height: 4px;
          background: rgba(139, 69, 19, 0.2);
          border-radius: 2px;
          cursor: pointer;
          overflow: hidden;
        }
        
        .progress-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, #DAA520, #FFD700);
          border-radius: 2px;
          transition: width 6s linear;
        }
        
        .progress-bar.active .progress-fill {
          width: 100%;
        }
        
        .progress-label {
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.75rem;
          color: #8B4513;
          font-weight: 600;
          opacity: 0.6;
        }
        
        .progress-bar.active .progress-label {
          opacity: 1;
        }
        
        /* Animations */
        @keyframes slideInUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(20px);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.15; }
        }
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes badge-shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes steam {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          50% { transform: translateY(-20px) scaleX(0.8); opacity: 1; }
          100% { transform: translateY(-40px) scaleX(0.6); opacity: 0; }
        }
        
        @keyframes sparkle {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1) rotate(180deg); opacity: 1; }
        }
        
        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero {
            padding: 100px 0 60px;
          }
          
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
          
          /* Removed display: none to show the visual panel on mobile */
          .visual-panel {
            order: -1; /* Move image above text content */
          }
          
          .hero-title {
            font-size: 2.8rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .cta-section {
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .slide-progress {
            bottom: 20px;
            gap: 20px;
          }
          
          .progress-bar {
            width: 40px;
          }
          
          .orb-1, .orb-2, .orb-3 {
            transform: scale(0.7);
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
