import React, { useEffect, useRef, useState } from "react";
import "./css/ServiceComponent.css";

function ServiceComponent({ title, description, imagePath, imageFirst }) {
  const textDivRef = useRef(null);
  const imageRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
  };

  // Function to adjust the image height
  const adjustImageHeight = () => {
    if (textDivRef.current && imageRef.current) {
      imageRef.current.style.maxHeight = textDivRef.current.offsetHeight + 'px';
    }
  };

  // Run once after component mounts
  useEffect(() => {
    // Check screen size initially
    checkScreenSize();
    adjustImageHeight();
    
    // Add event listeners
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('resize', adjustImageHeight);
    
    // Clean up function to remove event listeners
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('resize', adjustImageHeight);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Create the image element
  const imageElement = (
    <img 
      ref={imageRef}
      src={imagePath} 
      alt={title} 
      className="servicePicContainer"
    />
  );

  // Create the text container element
  const textElement = (
    <div 
      ref={textDivRef}
      className="serviceTextContainer"
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="custom-button"><span>Learn more</span></button>
    </div>
  );

  // On small screens, imageFirst is always true
  const effectiveImageFirst = isSmallScreen ? true : imageFirst;

  return (
    <div className="serviceContainer">
      {effectiveImageFirst ? imageElement : textElement}
      {effectiveImageFirst ? textElement : imageElement}
    </div>
  );
}

// Default props in case they're not provided
ServiceComponent.defaultProps = {
  title: "Software Development",
  description: "Nisi anim laboris in est elit. Amet eu non dolor eiusmod dolore esse ex dolor nisi aliqua commodo occaecat.",
  imagePath: "/971.jpg",
  imageFirst: true
};

export default ServiceComponent;