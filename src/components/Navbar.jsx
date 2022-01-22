import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import ClickAwayListener from "react-click-away-listener";

export const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleOutside, setToggleOutside] = useState(false);
  const handleClickOutside = () => {
    setToggleOutside((prevState) => !prevState);
    if (toggleOutside) {
      setToggleNav(false);
    }
  };
  return (
    <nav className="flex text-neutral-50 font-semibold text-normal h-40 items-center">
      <Link to="/">
        <ul className="mr-16">
          <span className="font-mono">{"<"}</span>
          {"Frank"}
          <span className="font-mono">{"/>"}</span>
        </ul>
      </Link>
      <Link to="/projects">
        <ul className="hidden xs:block mr-16">Projects</ul>
      </Link>
      <Link to="/skills">
        <ul className="hidden xs:block">Skills</ul>
      </Link>
      <div className="relative ml-auto">
        <AiOutlineMenu
          className="block xs:hidden cursor-pointer"
          fill={"#fafafa"}
          size={32}
          onClick={() => {
            setToggleNav((prevState) => !prevState);
            if (toggleOutside) {
              setToggleOutside((prevState) => !prevState);
            }
          }}
        />
        {toggleNav && (
          <ClickAwayListener onClickAway={handleClickOutside}>
            <div className="absolute xs:hidden top-10 right-0.5 w-48 bg-background-900 border border-neutral-50 rounded-md z-10">
              <Link className="flex justify-center" to="/projects">
                <ul className="xs:hidden block text-3xl h-16 leading-[4rem] px-6">
                  Projects
                </ul>
              </Link>
              <Link className="flex justify-center" to="/skills">
                <ul className="xs:hidden block text-3xl h-16 leading-[4rem] px-6">
                  Skills
                </ul>
              </Link>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </nav>
  );
};
