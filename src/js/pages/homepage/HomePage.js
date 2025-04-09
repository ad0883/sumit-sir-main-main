import React from 'react'

import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import ExploreCourses from '../../components/exploreCourses/ExploreCourses'
import MeetTeam from '../../components/meetTeam/MeetTeam'
import FAQs from '../../components/FAQs/FAQs'
import Footer from '../../components/footer/Footer'
import LearningProblems from '../../components/LearningProblems/LearningProblems';
//import WhatsApp from '../../components/whatsApp/WhatsApp'
import SprintcodeCommunity from '../../components/community/SprintcodeCommunity';
import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel';
import ExperienceSection from '../../components/experienceSection/experienceSection'
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ExploreCourses />

      {/*<WhatsApp />*/}
      <MeetTeam />
      <LearningProblems />
      {/*<LearningProblems />*/}
      {/*<SprintcodeCommunity />*/}
      <TestimonialCarousel />
      <SprintcodeCommunity />
      <ExperienceSection />
      <FAQs />
      <Footer />

    </div>
  )
}

export default HomePage