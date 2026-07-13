import React, { useState } from 'react'
import './Banner.css'
import fotoBanner from '../../assets/banner.jpeg'

const Banner = () => {
  const [imageError, setImageError] = useState(false)

  // Si la imagen no carga, mostrar fallback
  if (imageError) {
    return (
      <section className="banner">
        <div className="banner-fallback">
          <h1>Tomás Imarina</h1>
          <p>Investigador en ecología marina · CADIC-CONICET</p>
        </div>
      </section>
    )
  }

  return (
    <section className="banner">
      <img 
        src={fotoBanner} 
        alt="Banner Tomás Imarina" 
        className="banner-image"
        loading="lazy"
        onError={() => setImageError(true)}
      />
    </section>
  )
}

export default Banner;