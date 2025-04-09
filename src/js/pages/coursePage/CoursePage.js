import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Curriculum from '../../components/curriculum/Curriculum';
import FAQs from '../../components/FAQs/FAQs';
import Footer from '../../components/footer/Footer';
import { courseData } from '../../data/courseData';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../../../css/pages/coursePage/coursePage.css';

const CoursePage = () => {
  const [currentCourse, setCurrentCourse] = useState();
  const [currentDateTime, setCurrentDateTime] = useState('2025-04-08 17:05:38');
  const [userLogin, setUserLogin] = useState('ad0883');
  const { courseName } = useParams();

  useEffect(() => {
    // Find and set the current course
    const course = courseData
      .flatMap(({ courses }) => courses) // Flatten all courses into a single array
      .find((course) => course.slug === courseName);

    if (course) {
      setCurrentCourse(course.courseDetail);
    }
  }, [courseName]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Update current date time every minute
    const timer = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toISOString().replace('T', ' ').split('.')[0];
      setCurrentDateTime(formattedDate);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  if (!currentCourse) {
    return (
      <>
        <Navbar />
        <div className="coursepage-outer-container">
          <div>Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="coursepage-outer-container">
        <div className="course-header">
          <div className="course-header-left">
            <h2>{currentCourse.title}</h2>
            <p className="mentor">{currentCourse.mentors}</p>
            <p className="description">{currentCourse.descriptionTop}</p>
            <div className="price-section">
              <span className="current-price">{currentCourse.priceInfo?.current}</span>
              <span className="original-price">{currentCourse.priceInfo?.original}</span>
            </div>
            <button className="enrollnow-button">
              <Link
                to="/enrollnow"
                state={{
                  courseName: currentCourse.title,
                  timestamp: currentDateTime,
                  user: userLogin,
                }}
              >
                Enroll Now
              </Link>
            </button>
          </div>
          <div className="course-header-right">
            <img src={currentCourse.courseImage} alt="Course" />
          </div>
        </div>

        <div className="what-youll-learn">
          <h4>What You'll Learn</h4>
          <div className="learning-outcomes">
            {currentCourse.learningOutcomes.map((item, index) => (
              <div key={index} className="learning-outcome-card">
                {item}
              </div>
            ))}
          </div>
        </div>

        <Curriculum courseCurriculum={currentCourse.courseCurriculum} />

        <div className="meet-the-instructor">
  <h1>Meet the Instructor</h1>
  {currentCourse.instructor.map((item, index) => (
    <div key={index} className="instructor-card">
      <img src={item.image} alt={`Instructor - ${item.name}`} />
      <div className="instructor-details">
        <h4>{item.name}</h4>
        <p><strong>{item.role}</strong></p>
        <p>{item.description1}</p>
        <p>{item.description2}</p>
        <div className="social-icons">
          {item.linkedin && (
            <a
              href={item.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn />
            </a>
          )}
          {item.instagram && (
            <a
              href={item.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Profile"
            >
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
        <FAQs />
        <Footer />
      </div>
    </>
  );
};

export default CoursePage;