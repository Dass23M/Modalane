import React from 'react'
export function CuratedLooks() {
  return (
    <section className="curated-looks">
      <div className="container">
        <h2>Curated Looks for You</h2>
        <div className="looks-container">
          <div className="look-card">
            <div className="look-image">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80"
                alt="Modern Classics"
              />
            </div>
            <div className="look-content">
              <h3>Modern Classics</h3>
              <p>Elevate your style with timeless pieces.</p>
              <button className="look-button">Own This Look</button>
            </div>
          </div>
          <div className="look-card">
            <div className="look-image">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Street Chic"
              />
            </div>
            <div className="look-content">
              <h3>Street Chic</h3>
              <p>Effortless, trendy and bolder than ever.</p>
              <button className="look-button">Own This Look</button>
            </div>
          </div>
          <div className="look-card">
            <div className="look-image">
              <img
                src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Sophisticated Edge"
              />
            </div>
            <div className="look-content">
              <h3>Sophisticated Edge</h3>
              <p>Where elegance meets modern innovation.</p>
              <button className="look-button">Own This Look</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
