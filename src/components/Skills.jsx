import { useState } from "react";
import { skills_arr } from "../utils/SkillsArray";
import { v4 as uuidv4 } from "uuid";

const Skills = () => {
  const [buttonToggles, setButtonToggles] = useState({
    btn1: true,
    btn2: false,
    btn3: false,
  });
  const [category, setCategory] = useState("frontend");
  return (
    <section id="skills" className="mt-16">
      <h1 className="text-neutral-50 text-h1 font-bold text-center">Skills</h1>
      <div className="flex w-full justify-center mt-2 flex-wrap">
        <button
          className={
            "w-32 h-12 rounded-3xl font-semibold mr-5 " +
            (buttonToggles.btn1
              ? "bg-teal-700 text-neutral-100"
              : "bg-background-800 text-neutral-400")
          }
          onClick={() => {
            if (!buttonToggles.btn) {
              setButtonToggles({ btn1: true, btn2: false, btn3: false });
              setCategory("frontend");
            }
          }}
        >
          Frontend
        </button>
        <button
          className={
            "w-32 h-12 rounded-3xl font-semibold mr-5 " +
            (buttonToggles.btn2
              ? "bg-teal-700 text-neutral-100"
              : "bg-background-800 text-neutral-400")
          }
          onClick={() => {
            if (!buttonToggles.btn2) {
              setButtonToggles({ btn1: false, btn2: true, btn3: false });
              setCategory("backend");
            }
          }}
        >
          Backend
        </button>
        <button
          className={
            "w-32 h-12 rounded-3xl font-semibold button-toggle " +
            (buttonToggles.btn3
              ? "bg-teal-700 text-neutral-100"
              : "bg-background-800 text-neutral-400")
          }
          onClick={() => {
            if (!buttonToggles.btn3) {
              setButtonToggles({ btn1: false, btn2: false, btn3: true });
              setCategory("other");
            }
          }}
        >
          Other
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
        {skills_arr
          .filter((skill) => skill.tag === category)
          .map((skill) => {
            return (
              <div
                key={uuidv4()}
                className="w-full bg-background-800 rounded-lg border border-neutral-600 text-neutral-100 p-4 flex items-center"
              >
                <img
                  className="w-10 h-10 cover object-contain"
                  src={skill.img_src}
                  alt="Skills Logo"
                />
                <div className="ml-5">
                  <h5 className="font-semibold">{skill.title}</h5>
                  <p>{skill.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Skills;
