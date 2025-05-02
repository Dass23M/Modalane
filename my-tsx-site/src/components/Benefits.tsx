import React from 'react'
import { Package2Icon, AwardIcon, TruckIcon } from 'lucide-react'
export function Benefits() {
  return (
    <section className="benefits-section">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="benefits-container">
          <div className="benefit-item">
            <div className="benefit-icon">
              <Package2Icon size={32} />
            </div>
            <h3>Exclusive Designs</h3>
            <p>Stand out with pieces you won't find anywhere else.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <AwardIcon size={32} />
            </div>
            <h3>Top Quality</h3>
            <p>Experience premium materials crafted to last.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <TruckIcon size={32} />
            </div>
            <h3>Fast Shipping</h3>
            <p>Enjoy seamless delivery straight to your door.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
