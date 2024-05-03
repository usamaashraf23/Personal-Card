import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const skills = [
  {
    name: "HTML+CSS",
    emoji: "💪",
    bgColor: "blue",
  },
  {
    name: "Javascript",
    emoji: "💪",
    bgColor: "yellow",
  },
  {
    name: "MongoDB",
    emoji: "💪",
    bgColor: "green",
  },
  {
    name: "Git and Github",
    emoji: "👍",
    bgColor: "red",
  },
  {
    name: "Rest APIs",
    emoji: "👍",
    bgColor: "skyblue",
  },
  {
    name: "React",
    emoji: "👊",
    bgColor: "orange",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <Header />
      <Intro />
      <Skills />
    </div>
  );
}
function Avatar() {
  return <img src="./cvpic.jpeg" alt="Personal Picture" className="avatar" />;
}
function Header() {
  return <h2 className="header">Usama Ashraf</h2>;
}
function Intro() {
  return (
    <div className="intro">
      <p>
        Full Stack Web Developer and Software Engineering Student at COMSATS
        Islamabad.When not coding or taking a class,I love to watch football
        games,play video games and watch historical Videos.
      </p>
    </div>
  );
}
function Skills() {
  return (
    <div className="skill">
      <Skill name="HTML+CSS" emoji="💪" bgColor="#4793AF" />
      <Skill name="Javascript" emoji="💪" bgColor="yellow" />
      <Skill name="MongoDB" emoji="💪" bgColor="green" />
      <Skill name="Git and Github" emoji="👍" bgColor="red" />
      <Skill name="Rest APIs" emoji="👍" bgColor="#A79277" />
      <Skill name="React" emoji="👊" bgColor="orange" />
      <Skill name="Node JS" emoji="🧠" bgColor="#75A47F" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="list-items" style={{ backgroundColor: props.bgColor }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
