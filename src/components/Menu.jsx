"use client"

import { useState } from "react"

export default function Menu() {
  const [selectedFlavor, setSelectedFlavor] = useState("original")
  const [hoveredItem, setHoveredItem] = useState(null)

  const flavors = [
    { id: "original", name: "Original", color: "#8B4513", image: "./original.png" },
    { id: "lemon", name: "Lemon", color: "#FFD700", image: "./lemon.png" },
    { id: "berries", name: "Berries", color: "#DC143C", image: "./berries.png" },
    { id: "pistachio", name: "Pistachio", color: "#9ACD32", image: "./pistachio.png" },
  ]

  const menuItems = {
    boxes: [
      { name: "Box of 4 mini", serving: "4prs", price: "18$", description: "Perfect for intimate gatherings" },
      { name: "Box of 4 trays", serving: "8prs", price: "38$", description: "Ideal for family celebrations" },
    ],
    trays: [
      { name: "Small tray", serving: "1-2prs", price: "10$", description: "Individual indulgence" },
      { name: "Medium tray", serving: "6prs", price: "30$", description: "Share with friends" },
      { name: "Large tray", serving: "10prs", price: "45$", description: "Party centerpiece" },
    ],
    cakes: [
      { name: "Small Cake", serving: "6prs", price: "35$", description: "Elegant presentation" },
      { name: "Medium Cake", serving: "8prs", price: "40$", description: "Special occasions" },
      { name: "Large Cake", serving: "10prs", price: "50$", description: "Grand celebrations" },
    ],
  }

  return (
    <div className="menu-container">
      <style jsx>{`
        .menu-container {
          min-height: 100vh;
          position: relative;
          font-family: 'Georgia', serif;
          background: linear-gradient(135deg, #f8f6f0 0%, #e8e2d5 100%);
          color: #2c1810;
        }

        .floating-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(139, 69, 19, 0.05);
          animation: float 20s infinite ease-in-out;
        }

        .floating-circle:nth-child(1) {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 80%;
          animation-delay: 0s;
        }

        .floating-circle:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 60%;
          left: 5%;
          animation-delay: -7s;
        }

        .floating-circle:nth-child(3) {
          width: 100px;
          height: 100px;
          top: 30%;
          left: 10%;
          animation-delay: -14s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(15px) rotate(240deg); }
        }

        /* Enhanced hero section with visual interest while keeping Hero's clean foundation */
        .hero-section {
          padding: 120px 2rem 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 100%);
          text-align: center;
          position: relative;
          z-index: 2;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(139, 69, 19, 0.03) 0%, transparent 70%);
          animation: rotate 30s linear infinite;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          top: 20px;
          right: 20px;
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, rgba(139, 69, 19, 0.1), rgba(255, 215, 0, 0.1));
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .brand-title {
          font-size: 4.5rem;
          font-weight: 700;
          color: #8B4513;
          margin-bottom: 1rem;
          line-height: 1.1;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          position: relative;
          z-index: 3;
          animation: shimmer 3s ease-in-out infinite, fadeInUp 1s ease-out;
          background: linear-gradient(90deg, #8B4513 0%, #D2691E 50%, #8B4513 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-subtitle {
          font-size: 1.4rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          position: relative;
          z-index: 3;
          animation: fadeInUp 1s ease-out 0.2s both;
          font-weight: 300;
          letter-spacing: 0.5px;
        }

        .hero-decorative-line {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #8B4513, transparent);
          margin: 0 auto;
          border-radius: 2px;
          animation: fadeInUp 1s ease-out 0.4s both;
          position: relative;
          z-index: 3;
        }

        .hero-decorative-line::before,
        .hero-decorative-line::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 8px;
          height: 8px;
          background: #8B4513;
          border-radius: 50%;
          transform: translateY(-50%);
        }

        .hero-decorative-line::before {
          left: -15px;
        }

        .hero-decorative-line::after {
          right: -15px;
        }

        .flavors-section {
          padding: 0 40px 80px;
          position: relative;
          z-index: 2;
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 50px;
          color: #8B4513;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .flavors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto 80px;
        }

        .flavor-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .flavor-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }

        .flavor-card:hover::before {
          left: 100%;
        }

        .flavor-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(139, 69, 19, 0.2);
          border-color: var(--flavor-color, #8B4513);
        }

        .flavor-card.selected {
          border-color: var(--flavor-color, #8B4513);
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(139, 69, 19, 0.3);
        }

        .flavor-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 0 auto 20px;
          object-fit: cover;
          border: 3px solid var(--flavor-color, #8B4513);
          transition: transform 0.3s ease;
        }

        .flavor-card:hover .flavor-image {
          transform: scale(1.1);
        }

        .flavor-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c1810;
          margin-bottom: 10px;
        }

        .flavor-accent {
          width: 40px;
          height: 3px;
          background: var(--flavor-color, #8B4513);
          margin: 0 auto;
          border-radius: 2px;
        }

        .menu-section {
          padding: 80px 40px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px);
          position: relative;
          z-index: 2;
        }

        .menu-categories {
          max-width: 1400px;
          margin: 0 auto;
        }

        .category {
          margin-bottom: 80px;
        }

        .category-title {
          font-size: 2rem;
          color: #8B4513;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 400;
          position: relative;
          display: inline-block;
        }

        .category-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #8B4513, transparent);
        }

        .items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
        }

        .menu-item {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 30px;
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .menu-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.02), rgba(139, 69, 19, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .menu-item:hover::before {
          opacity: 1;
        }

        .menu-item:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(139, 69, 19, 0.15);
          border-left-color: #8B4513;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
        }

        .item-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2c1810;
          margin-bottom: 5px;
        }

        .item-serving {
          font-size: 0.9rem;
          color: #8B4513;
          font-style: italic;
        }

        .item-price {
          font-size: 1.8rem;
          font-weight: 700;
          color: #8B4513;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }

        .item-description {
          color: #6b4423;
          font-size: 0.95rem;
          line-height: 1.4;
          font-style: italic;
        }

        .additives-section {
          background: rgba(139, 69, 19, 0.05);
          padding: 60px 40px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .additives-title {
          font-size: 2rem;
          color: #8B4513;
          margin-bottom: 30px;
          font-weight: 300;
        }

        .additives-list {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .additive-item {
          background: rgba(255, 255, 255, 0.9);
          padding: 20px 30px;
          border-radius: 25px;
          font-size: 1.1rem;
          color: #2c1810;
          border: 2px solid rgba(139, 69, 19, 0.2);
          transition: all 0.3s ease;
        }

        .additive-item:hover {
          background: rgba(139, 69, 19, 0.1);
          border-color: #8B4513;
          transform: translateY(-2px);
        }

        .note-text {
          max-width: 600px;
          margin: 0 auto;
          color: #6b4423;
          font-style: italic;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 60px 20px 40px;
          }

          .flavors-section,
          .menu-section,
          .additives-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .flavors-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
          }

          .items-grid {
            grid-template-columns: 1fr;
          }

          .additives-list {
            gap: 20px;
          }
        }
      `}</style>

      <div className="floating-elements">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>

      <section className="hero-section">
        <h1 className="brand-title">Tiramisu Choice</h1>
        <p className="brand-subtitle">Authentic Italian Indulgence</p>
        <div className="hero-decorative-line"></div>
      </section>

      <section className="flavors-section">
        <h2 className="section-title">Our Flavours</h2>
        <div className="flavors-grid">
          {flavors.map((flavor) => (
            <div
              key={flavor.id}
              className={`flavor-card ${selectedFlavor === flavor.id ? "selected" : ""}`}
              style={{ "--flavor-color": flavor.color }}
              onClick={() => setSelectedFlavor(flavor.id)}
            >
              <img src={flavor.image || "/placeholder.svg"} alt={flavor.name} className="flavor-image" />
              <h3 className="flavor-name">{flavor.name}</h3>
              <div className="flavor-accent"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="menu-section">
        <div className="menu-categories">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="category">
              <h3 className="category-title">{category}</h3>
              <div className="items-grid">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="menu-item"
                    onMouseEnter={() => setHoveredItem(`${category}-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="item-header">
                      <div>
                        <div className="item-name">{item.name}</div>
                        <div className="item-serving">{item.serving}</div>
                      </div>
                      <div className="item-price">{item.price}</div>
                    </div>
                    <div className="item-description">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="additives-section">
        <h3 className="additives-title">Additives</h3>
        <div className="additives-list">
          <div className="additive-item">+1$ White letters chocolate</div>
          <div className="additive-item">+0.5$/1 Candle</div>
        </div>
       
      </section>
    </div>
  )
}
