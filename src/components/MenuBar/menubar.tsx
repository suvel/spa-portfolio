import React, { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-scroll";
import classNames from "classnames";
import "./menubar.css";

const MenuBar: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handelOnMenuBarSelected = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowMenu((state) => !state);
  };

  const toggleMenuOption = () => {
    setShowMenu((state) => !state);
  };

  const handelClickPropagation = (event: React.FormEvent<HTMLUListElement>) => {
    event.stopPropagation();
    setShowMenu((state) => !state);
  };

  useEffect(() => {
    const nav = document.getElementsByClassName("nav-item");
    for (var i = 0; i < nav.length; i++) {
      nav[i].addEventListener("click", toggleMenuOption, false);
    }
    return () => {
      for (var i = 0; i < nav.length; i++) {
        nav[i].removeEventListener("click", toggleMenuOption, false);
      }
    };
  }, []);

  const menuBarContainerStyle = classNames({
    "menubar-container": true,
    selected: showMenu,
  });

  const menuBarStyle = classNames({
    menubar: true,
  });

  const menuOptionStyle = classNames({
    menuoptions: true,
    selected: !showMenu,
  });

  return (
    <div className={menuBarContainerStyle} onClick={toggleMenuOption}>
      <div className={menuBarStyle} onClick={handelOnMenuBarSelected} />
      <div
        className={menuOptionStyle}
        onClick={(event) => event.stopPropagation()}
      >
        <ul onChange={handelClickPropagation}>
          <li className="nav-item">
            <Link
              hashSpy={true}
              activeClass="active"
              to="content1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Libraries
            </Link>
          </li>
          <li className="nav-item">
            <Link
              hashSpy={true}
              activeClass="active"
              to="content2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Current Project
            </Link>
          </li>
          <li className="nav-item">
            <Link
              hashSpy={true}
              activeClass="active"
              to="content3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              My works
            </Link>
          </li>
          <li className="nav-item">
            <Link
              hashSpy={true}
              activeClass="active"
              to="content4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Current Working Status
            </Link>
          </li>
          <li className="nav-item">
            <Link
              hashSpy={true}
              activeClass="active"
              to="content5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Hire me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
