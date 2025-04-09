import React, { useState, useEffect } from 'react';
import '../../../css/components/header/header.css'; // Path to the CSS file
import image1 from '../../assets/Programming-icon.png';
import image2 from '../../assets/Programming-icon1.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';

const Header = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(''); // For swipe animations

  useEffect(() => {
    const interval = setInterval(() => {
      // Add swipe-out animation to the current image
      setAnimationClass('swipe-out');

      setTimeout(() => {
        // Update the image index and trigger the swipe-in animation
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimationClass('swipe-in');
      }, 800); // Delay to match the swipe animation duration
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="normal-outer-container">
      <div className="components-outer-container">
        <div className="header-container">
          <div className="left" data-aos="fade-right">
            <div className="first">
              <h1>Become Job Ready </h1>
              <h1 className="custom-text">with Latest Technology</h1>
            </div>
            <div className="second">
              <p>Courses that create careers through immersive experiences & mentorship from industry leaders.</p>
            </div>
            <div className="third">
              <button className="cm-gradient-button enroll"><a href="#enroll">Enroll Now</a></button>
              <button className="cm-gradient-button explore"><a href="#courses">Explore More</a></button>
            </div>
          </div>
          <div className="right" data-aos="fade-left">
            <div className="header-image">
              <img
                src={images[currentImageIndex]}
                alt="header"
                className={animationClass}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;