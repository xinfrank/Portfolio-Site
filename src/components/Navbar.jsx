import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
    <nav className="flex text-neutral-50 font-semibold text-normal h-[5.5rem] max-w-4xl m-auto px-5 items-center sticky z-50 top-0 bg-background-900">
      <AnchorLink offset="105" href="#home">
        <p className="mr-16">
          <span className="font-mono">{"<"}</span>
          {"Frank"}
          <span className="font-mono">{"/>"}</span>
        </p>
      </AnchorLink>
      <AnchorLink offset="80" href="#skills">
        <p className="hidden xs:block mr-16">Skills</p>
      </AnchorLink>
      <p className="hidden xs:block">Projects</p>
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
              <AnchorLink offset="80" href="#skills">
                <p className="xs:hidden block text-2xl h-16 leading-[4rem] px-6">
                  Skills
                </p>
              </AnchorLink>
              <p className="xs:hidden block text-2xl h-16 leading-[4rem] px-6">
                Projects
              </p>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </nav>
  );
};
