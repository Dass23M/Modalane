import React from 'react'
export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Style Beyond Boundaries</h1>
          <p>
            Discover the latest trends in fashion and lifestyle for men and
            women. Redefine your wardrobe with effortless elegance.
          </p>
          <button className="cta-button">Shop Now</button>
        </div>
        <div className="hero-images">
          <div className="image-grid">
            <div className="image-item">
              <img
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Fashion model in sunglasses"
              />
            </div>
            <div className="image-item">
              <img
                src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=672&q=80"
                alt="Textured wall fashion background"
              />
            </div>
            <div className="image-item">
              <img
                src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                alt="Man in beige suit"
              />
            </div>
            <div className="image-item">
              <img
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Woman in casual denim outfit"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
