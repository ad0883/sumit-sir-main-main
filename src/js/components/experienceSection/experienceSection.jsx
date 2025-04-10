import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../../css/components/ExperienceSection/ExperienceSection.css';

const ExperienceSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="experience-section" ref={ref}>
            <motion.div
                className="experience-content"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <motion.div className="experience-item-custom" variants={itemVariants}>
                    <h2 className="experience-title">
                        An experience that keeps <span className="highlight">learners</span> at <span className="highlight">the center</span>
                    </h2>
                </motion.div>

                <motion.div className="experience-item" variants={itemVariants}>
                    <h3 className="experience-heading">Handpicked Instructors</h3>
                    <p className="experience-description">
                        We handpick every new instructor on SprintCode and help them with necessary guidance.
                    </p>
                </motion.div>

                <motion.div className="experience-item" variants={itemVariants}>
                    <h3 className="experience-heading">Learn-by-doing</h3>
                    <p className="experience-description">
                        We use backward course design principles to make sure our learning outcomes meet the needs of everyone.
                    </p>
                </motion.div>

                <motion.div className="experience-item" variants={itemVariants}>
                    <h3 className="experience-heading">Comprehensive curriculum</h3>
                    <p className="experience-description">
                        Our course curriculum is designed backwards from the needs and goals of course participants.
                    </p>
                </motion.div>

                <motion.div className="experience-item" variants={itemVariants}>
                    <h3 className="experience-heading">Community first</h3>
                    <p className="experience-description">
                        Our courses have engaged and supportive learning communities which bring a sense of belonging.
                    </p>
                </motion.div>

                <motion.div className="experience-item" variants={itemVariants}>
                    <h3 className="experience-heading">Flipped-class approach</h3>
                    <p className="experience-description">
                        Our courses require participants coming to class so that live sessions remain interactive and engaging.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ExperienceSection;
