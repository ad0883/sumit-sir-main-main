import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import '../../../css/components/FAQs/FAQs.css';
import { FAQData } from '../../data/FAQData';

const FAQs = () => {
  const [whichClicked, setWhichClicked] = useState(0);
  const [clickedArray, setClickedArray] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleClick = (id) => () => {
    if (clickedArray.includes(id)) {
      setWhichClicked(id);
    } else {
      setClickedArray([...clickedArray, id]);
      setWhichClicked(id);
    }
  };

  const handleButtonClick = (id) => () => {
    if (clickedArray.includes(id)) {
      setClickedArray(clickedArray.filter((item) => item !== id));
      setWhichClicked(id);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -50 }, // Start slightly off-screen to the left
    visible: {
      opacity: 1,
      x: 0, // Animate to its original position
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, // Each FAQ item starts off-screen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Slides in to its position
  };

  return (
    <div className="FAQ-outer-container" ref={ref}>
      <motion.div
        className="components-outer-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="FAQ-container" data-aos="fade-up">
          <div className="top">
            <h1>Frequently asked questions🤔</h1>
          </div>
          <div className="bottom">
            {FAQData.map((item) => {
              const { id, question, answer } = item;
              return (
                <motion.div
                  className="questions faq"
                  key={id}
                  onClick={handleClick(id)}
                  variants={itemVariants}
                >
                  <div className="question">
                    <p className="ques">{question}</p>
                    <button onClick={handleButtonClick(id)}>
                      {clickedArray.includes(id) ? '-' : '+'}
                    </button>
                  </div>
                  {clickedArray.includes(id) && <p className="ans">{answer}</p>}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQs;