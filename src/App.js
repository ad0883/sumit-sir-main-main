import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import AOS from "aos";
// import "aos/dist/aos.css";
import HomePage from './js/pages/homepage/HomePage';
import CoursePage from './js/pages/coursePage/CoursePage';
// import JoinCampusCaptain from './js/pages/joinAsCompusCaptains/JoinCampusCaptain';
import EnrollNow from './js/pages/enrollnow/EnrollNow';
import PageNotFound from './js/pages/pageNotFound/PageNotFound';
// import DiscordPage from './js/pages/discord/DiscordPage';

//import { HomePage, CoursePage, JoinCampusCaptain, SignUp, PageNotFound, DiscordPage } from './js/pages';

const App = () => {

  // useEffect(() => {
  //   AOS.init({ startEvent: 'load' });
  //   AOS.refreshHard();
  // }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:courseName" element={<CoursePage />} />
        {/* <Route path="/join-campus-captain" element={<JoinCampusCaptain />} /> */}
        <Route path="/enrollnow" element={<EnrollNow />} />
        {/* <Route path="/discord" element={<DiscordPage />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </main>
  )
}

export default App