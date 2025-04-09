import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import "../../../css/components/meetTeam/meetTeam.css";
import { teamData } from "../../data/teamData";

const MeetTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const filteredTeamData = React.useMemo(
    () => teamData.filter((item) => item.id !== 3 && item.id !== 4),
    []
  );

  const nextSlide = React.useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === filteredTeamData.length - 1 ? 0 : prevIndex + 1
    );
  }, [filteredTeamData.length]);

  const prevSlide = React.useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? filteredTeamData.length - 1 : prevIndex - 1
    );
  }, [filteredTeamData.length]);

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 2500); // Auto-slide every 2.5 seconds
    return () => clearInterval(autoSlide); // Cleanup on unmount
  }, [nextSlide]);

  return (
    <div className="team-outer-container">
      <header className="top" data-aos="fade-up">
        <h1>Our Top Educators</h1>
        <p className="subheading">
          Industry experts who make complex concepts simple and learning truly engaging.
        </p>
      </header>

      <section className="team-carousel-layout" data-aos="fade-up">
        {/* Previous Button */}
        <button
          className="carousel-button prev-button"
          onClick={prevSlide}
          aria-label="Previous team member"
        >
          <FaChevronLeft />
        </button>

        {/* Team Photos */}
        <div className="team-photos-container">
          {filteredTeamData.map(({ id, image, name }, index) => (
            <div
              key={id}
              className={`team-photo-item ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${name}'s details`}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === "Enter" && setActiveIndex(index)}
            >
              <div className="team-photo-wrapper">
                <img src={image} alt={`${name}'s photo`} />
                <div className="team-photo-name">{name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          className="carousel-button next-button"
          onClick={nextSlide}
          aria-label="Next team member"
        >
          <FaChevronRight />
        </button>
      </section>

      {/* Team Description */}
      <article className="team-description-container" data-aos="fade-up">
        {filteredTeamData.map(
          (
            { id, description1, description2, linkedin, instagram, name, role },
            index
          ) => (
            <div
              key={id}
              className={`team-description ${index === activeIndex ? "active" : ""}`}
              style={{
                opacity: index === activeIndex ? 1 : 0,
                display: index === activeIndex ? "block" : "none",
              }}
            >
              <header className="team-description-header">
                <h3 className="team-name">{name}</h3>
                <div className="social-icons">
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name}'s LinkedIn Profile`}
                    >
                      <FaLinkedinIn />
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name}'s Instagram Profile`}
                    >
                      <BsInstagram />
                    </a>
                  )}
                </div>
              </header>
              <p className="team-role">{role}</p>
              <div className="description">
                <p>{description1}</p>
                <p>{description2}</p>
              </div>
            </div>
          )
        )}
      </article>
    </div>
  );
};

export default MeetTeam;