import React from 'react'
import { StarIcon } from 'lucide-react'
export function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-rating">
              <StarIcon size={16} />
              <StarIcon size={16} />
              <StarIcon size={16} />
              <StarIcon size={16} />
              <StarIcon size={16} />
            </div>
            <h3>Perfect Fit</h3>
            <p>"These three pieces complement my style!"</p>
            <div className="testimonial-author">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Jessica R."
              />
              <div className="author-info">
                <span className="author-name">Jessica R.</span>
                <span className="author-location">New York</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">
              <StarIcon size={16} />
              <StarIcon size={16} />
              <StarIcon size={16} />
              <StarIcon size={16} />
              <StarIcon size={16} />
            </div>
            <h3>Highly Recommend</h3>
            <p>"Quality and delivery exceeded my expectations!"</p>
            <div className="testimonial-author">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="David M."
              />
              <div className="author-info">
                <span className="author-name">David M.</span>
                <span className="author-location">San Francisco</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">
              <StarIcon size={16} />
              <StarIcon size={16} />
              <StarIcon size={16} />
              <StarIcon size={16} />
              <StarIcon size={16} />
            </div>
            <h3>Stylish & Trendy</h3>
            <p>"Finally found a store that nails modern fashion!"</p>
            <div className="testimonial-author">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Emily K."
              />
              <div className="author-info">
                <span className="author-name">Emily K.</span>
                <span className="author-location">Chicago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
