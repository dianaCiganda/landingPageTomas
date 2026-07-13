import React, { useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [bannerError, setBannerError] = useState(false);
  const [profileError, setProfileError] = useState(false);

  return (
    <section className="banner">
      <div className="banner-container">

        <div className="banner-background">
          {!bannerError ? (
            <img
              src="/assets/banner.jpeg"
              alt="Banner"
              className="banner-image"
              onError={() => setBannerError(true)}
            />
          ) : (
            <div className="banner-bg-fallback"></div>
          )}
        </div>

        <div className="banner-profile">
          {!profileError ? (
            <img
              src="/assets/perfil.jpeg"
              alt="Tomás Imarina"
              className="banner-profile-image"
              onError={() => setProfileError(true)}
            />
          ) : (
            <div className="banner-profile-placeholder">👨‍🔬</div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Banner;