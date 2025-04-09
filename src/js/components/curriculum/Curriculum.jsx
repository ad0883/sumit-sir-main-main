import React, { useState } from 'react';
import '../../../css/components/curriculum/curriculum.css';
import downArrow from '../../assets/down_arrow.svg';
import upArrow from '../../assets/up_arrow.svg';

const Curriculum = (props) => {
    const [visibleModules, setVisibleModules] = useState({});

    const toggleModuleVisibility = (event) => {
        const uniqueId = event.currentTarget.getAttribute('data-unique-id');
        setVisibleModules(prevState => ({
            ...prevState,
            [uniqueId]: !prevState[uniqueId] // Toggle the visibility of the clicked module
        }));
    };

    return (
        <div className="curriculum-outer-container">
            <div className="components-outer-container">
                <div className="curriculum-container">
                    <div className="top" data-aos="fade-up">
                        <h2>Curriculum Designed for the Inquisitive Mind</h2>
                    </div>
                    <div className="bottom">
                        {props.courseCurriculum?.modules?.map((module, moduleId) => {
                            const moduleUniqueKey = `course_${moduleId}`;

                            return (
                                <div className="card" key={moduleId}>
                                    {/* Module Header */}
                                    <div
                                        className="module-container"
                                        data-unique-id={moduleUniqueKey}
                                        onClick={toggleModuleVisibility}
                                    >
                                        <span className="module-heading">{module.module_name}</span>
                                        <span className="down-arrow">
                                            <img
                                                src={visibleModules[moduleUniqueKey] ? upArrow : downArrow}
                                                alt="toggle-arrow"
                                            />
                                        </span>
                                    </div>

                                    {/* Submodules Section */}
                                    <div
                                        className="submodules-container"
                                        style={{
                                            display: visibleModules[moduleUniqueKey] ? 'block' : 'none' // Show/Hide submodules
                                        }}
                                    >
                                        {module.sub_modules?.map((subModule, subModuleId) => (
                                            <div
                                                key={subModuleId}
                                                className="sub-module-container"
                                            >
                                                <span className="sub-module-heading">{subModule}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Curriculum;