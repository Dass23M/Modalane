export function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Clothing rack"
            />
          </div>
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              We are your destination for high-quality fashion and lifestyle
              essentials that inspire confidence and express individuality for
              both men and women. Our collections bring you the perfect blend of
              style and comfort for every occasion.
            </p>
            <button className="about-button">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}
