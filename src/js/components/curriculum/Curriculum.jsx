import React, { useState } from 'react';
import '../../../css/components/curriculum/curriculum.css';
import downArrow from '../../assets/down_arrow.svg';
import upArrow from '../../assets/up_arrow.svg';

const Curriculum = (props) => {
    
    const [visibleModules, setVisibleModules] = useState({});
    const [visibleSubModules, setVisibleSubModules] = useState({});

    const toggleVisibility = (event) => {
        const currentElement = event.currentTarget;
        const uniqueId = currentElement.getAttribute('data-unique-id');

        if (uniqueId.includes('_module_')) {
            setVisibleSubModules(prevState => {
                const updatedSubModules = { ...prevState, [uniqueId]: !prevState[uniqueId] };
                return updatedSubModules;
            });
        } else {
            setVisibleModules(prevState => ({ ...prevState, [uniqueId]: !prevState[uniqueId] }));
        }
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
                                    <div
                                        className={`module-container`}
                                        data-unique-id={moduleUniqueKey}
                                        onClick={toggleVisibility}
                                    >
                                        <span className="module-heading">{module.module_name}</span>
                                        <span className="down-arrow">
                                            <img src={ visibleModules[moduleUniqueKey] ? upArrow : downArrow } alt="down-arrow" />
                                        </span>
                                    </div>
                                    {module.sub_modules?.map((subModule, subModuleId) => {
                                        const subModuleUniqueKey = `${moduleUniqueKey}_module_${subModuleId}`;
                                        // console.log(subModule)
                                        return (
                                            <React.Fragment key={subModuleId}>
                                                <div
                                                    className={`sub-module-container ${visibleSubModules[subModuleUniqueKey] ? 'active' : ''}`}
                                                    data-unique-id={subModuleUniqueKey}
                                                    style={{ display: visibleModules[moduleUniqueKey] ? 'flex' : 'none' }}
                                                    onClick={toggleVisibility}
                                                >
                                                    <span className="sub-module-heading">{subModule}</span>
                                                    {/* <span className="inner-down-arrow">
                                                        <img src={visibleSubModules[subModuleUniqueKey] ? innerUpArrow : innerDownArrow} alt="down-arrow" />
                                                    </span> */}
                                                </div>
                                                {/* {subModule?.sub_topics?.map((topic, topicId) => {
                                                    const topicUniqueKey = `${subModuleUniqueKey}_sub_module_${topicId}`;
                                                    return (
                                                        <div
                                                            key={topicId}
                                                            className={`sub-topic-container`}
                                                            data-unique-id={topicUniqueKey}
                                                            style={{ display: visibleModules[moduleUniqueKey] ? visibleSubModules[subModuleUniqueKey] ? 'block' : 'none' : 'none'}}
                                                        >
                                                            <span className="sub-topic-heading">{topic}</span>
                                                        </div>
                                                    );
                                                })} */}
                                            </React.Fragment>
                                        );
                                    })}
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
