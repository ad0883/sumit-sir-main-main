import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import '../../../css/components/exploreCourses/exploreCourses.css'
import { courseData } from '../../data/courseData'

const ExploreCourses = () => {
  const [courses, setCourses] = useState(courseData);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
      offset: 200,    // Offset (in px) from the original trigger point
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="explore-path-outer-container">
      <div className="components-outer-container">
        <div className='explore-courses-container' id="courses">
          <div className="top" data-aos="fade-up" data-aos-delay="100">
            <div className="first">
              <h1>Explore Courses</h1>
            </div>
          </div>
          <div className="bottom">
            {courses.map((courseGroup, groupIndex) => {
              return (
                <div 
                  className="course-container" 
                  key={courseGroup.title}
                  data-aos="fade-up"
                  data-aos-delay={groupIndex * 100}
                >
                  <h2 data-aos="fade-up" data-aos-delay={groupIndex * 150}>{courseGroup.title}</h2>
                  <div className="course-internal-container">
                    {courseGroup.courses.map((course, index) => {
                      const { courseImage, title, slug } = course;
                      return (
                        <div 
                          className="course" 
                          key={index} 
                          data-aos="zoom-in"
                          data-aos-delay={index * 100}
                        >
                          <div className="course-top">
                            <div className='course-icon'>
                              <img src={courseImage} alt="icon" />
                            </div>
                            <div className='course-heading'>
                              <p className="course-title">{title}</p>
                            </div>
                          </div>

                          <div className="course-info">
                            <div className="first">
                            </div>
                            <div>
                              <Link 
                                to={`/courses/${slug}`} 
                                className="course-explore-btn"
                              >
                                Explore Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreCourses