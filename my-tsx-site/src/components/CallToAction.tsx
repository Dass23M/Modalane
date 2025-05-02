import React from 'react'
export function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Ready to Transform Your Style?</h2>
            <p>Shop now and find your new favorite look today.</p>
            <button className="cta-button">Start Shopping</button>
          </div>
          <div className="cta-image">
            <img
              src="https://images.pexels.com/photos/23021451/pexels-photo-23021451/free-photo-of-pretty-model-posing-with-curtain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Model in white outfit"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
