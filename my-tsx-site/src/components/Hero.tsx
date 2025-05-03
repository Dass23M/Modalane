import React, { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const imageRefs = useRef([]);
  
  // Handle parallax effect
  useEffect(() => {
    setIsLoaded(true);
    
    const heroElement = heroRef.current;
    let rafId = null;
    
    const handleMouseMove = (e) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5);
        const yPos = (clientY / window.innerHeight - 0.5);
        
        imageRefs.current.forEach((img, index) => {
          if (!img) return;
          const factor = (index + 1) * 7;
          img.style.transform = `translate3d(${xPos * factor}px, ${yPos * factor}px, 0) scale(1.05)`;
        });
      });
    };
    
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="bg-stone-100 py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className={`w-full lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-12 ${isLoaded ? 'animate-content' : ''}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 opacity-0 transform translate-y-8 animate-title">
            Style Beyond Boundaries
          </h1>
          <p className="text-lg mb-8 text-gray-600 opacity-0 transform translate-y-8 animate-description">
            Discover the latest trends in fashion and lifestyle for men and
            women. Redefine your wardrobe with effortless elegance.
          </p>
          <button className="bg-gray-700 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded transition-colors duration-300 opacity-0 transform translate-y-8 animate-button">
            Shop Now
          </button>
        </div>
        
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4 h-96">
            {[1, 2, 3, 4].map((_, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-md opacity-0 animate-image"
                style={{
                  animationDelay: `${0.4 + index * 0.2}s`
                }}
              >
                <div 
                  ref={el => imageRefs.current[index] = el}
                  className="w-full h-full bg-cover bg-center transition-transform duration-700"
                  style={{ 
                    backgroundImage: `url('/api/placeholder/${400}/${index % 2 === 0 ? 480 : 400}')`,
                    transformOrigin: index % 2 === 0 ? 'center left' : 'center right',
                    transform: 'scale(1.2)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(1.2);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-title {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
        
        .animate-description {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }
        
        .animate-button {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.6s;
        }
        
        .animate-image {
          animation: fadeInScale 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}