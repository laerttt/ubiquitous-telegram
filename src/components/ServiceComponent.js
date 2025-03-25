import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/ServiceComponent.css";

function ServiceComponent({ title, description, imagePath, imageFirst, link }) {
  const textDivRef = useRef(null);
  const imageRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  const adjustImageHeight = () => {
    if (textDivRef.current && imageRef.current) {
      imageRef.current.style.maxHeight = textDivRef.current.offsetHeight + 'px';
    }
  };

  useEffect(() => {
    checkScreenSize();
    adjustImageHeight();

    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('resize', adjustImageHeight);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('resize', adjustImageHeight);
    };
  }, []);

  const imageElement = (
    <img 
      ref={imageRef}
      src={imagePath} 
      alt={title} 
      className="servicePicContainer"
    />
  );

  const textElement = (
    <div 
      ref={textDivRef}
      className="serviceTextContainer"
    >
      <h2>{title}</h2>
      <p>{description}</p>
      {link && (
        <Link to={link} className="custom-button">
          <span>Learn more</span>
        </Link>
      )}
    </div>
  );

  const effectiveImageFirst = isSmallScreen ? true : imageFirst;

  return (
    <div className="serviceContainer">
      {effectiveImageFirst ? imageElement : textElement}
      {effectiveImageFirst ? textElement : imageElement}
    </div>
  );
}

ServiceComponent.defaultProps = {
  title: "Software Development",
  description: "Nisi anim laboris in est elit. Amet eu non dolor eiusmod dolore esse ex dolor nisi aliqua commodo occaecat.",
  imagePath: "/971.jpg",
  imageFirst: true,
  link: "/pricing/software"
};

export default ServiceComponent;
