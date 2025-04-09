import React from "react";
import { useInView } from "react-intersection-observer";
import "../../../css/components/learningproblems/learningproblems.css";

const problems = [
  { id: 1, text: "Learning in isolation", emoji: "😔" },
  { id: 2, text: "No practical/hands-on experience", emoji: "😕" },
  { id: 3, text: "No peer support", emoji: "😞" },
  { id: 4, text: "Difficult to retain what was taught", emoji: "😟" },
  { id: 5, text: "Hard to get across the finish line", emoji: "😣" },
  { id: 6, text: "No personal guidance and mentorship", emoji: "😩" },
  { id: 7, text: "Outdated curriculum", emoji: "😖" },
];

const solutions = [
  {
    id: 1,
    title: "Live interactive sessions by industry experts",
    description:
      "Get valuable industry insights from our instructors who have dedicated years to learning and unlearning.",
    icon: "🎙️",
  },
  {
    id: 2,
    title: "Dedicated sessions to solve your queries",
    description:
      "We offer doubt-solving sessions with mentors to help you stay on track with the course.",
    icon: "💬",
  },
  {
    id: 3,
    title: "Hands-on projects to apply your learnings",
    description:
      "Our programs prioritize hands-on learning, with projects at the end of each module to reinforce each topic.",
    icon: "🛠️",
  },
  {
    id: 4,
    title: "Active community to help you grow",
    description:
      "Our programs offer a college-like learning experience with a supportive community of like-minded individuals.",
    icon: "🌱",
  },
];

const LearningProblems = () => {
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div 
      className={`learning-problems-container ${containerInView ? 'animate' : ''}`} 
      ref={containerRef}
    >
      <h1>Learning problems we've all faced</h1>
      <div className="problems">
        {problems.map((problem, index) => (
          <div
            key={problem.id}
            className="problem"
            style={{ "--order": index + 1 }}
          >
            <span className="emoji">{problem.emoji}</span>
            <span className="text">{problem.text}</span>
          </div>
        ))}
      </div>
      <h1>
        Presenting the <span className="custom">SprintCode</span> way!
      </h1>
      <div className="solutions">
        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            className="solution"
            style={{ "--order": index + 1 }}
          >
            <div className="icon">{solution.icon}</div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningProblems;