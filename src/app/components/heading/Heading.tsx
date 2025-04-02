import React from "react";
import "./heading.scss";
import Link from "next/link";
type Props = {};

export default function Heading({}: Props) {
  return (
    <header id="heading">
      <svg
        width="455"
        height="183"
        viewBox="0 0 455 183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="decor-l"
      >
        <g id="strokel">
          <path
            id="Vector 2"
            d="M0 53H332.5L454 174.5"
            stroke="#D75EC7"
            strokeWidth="2"
          />
          <path
            id="Vector 4"
            d="M-162 2H170.5L350 181.5"
            stroke="#8407BB"
            strokeWidth="4"
          />
        </g>
      </svg>
      <svg
        width="571"
        height="239"
        viewBox="0 0 571 239"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="decor-r"
      >
        <path d="M603.5 74H165L2 237" stroke="#D75EC7" strokeWidth="3" />
        <path d="M588.5 3H351L188 166" stroke="#8407BB" strokeWidth="5" />
      </svg>

      <div className="title">
        <img src="/g/logo-white.png" alt="" className="logo" />
      </div>

      <nav id="nav">
        <div className="line "></div>
        <div className="nav-content">
          <Link href={"/"} className="btn btn-nav">
            ABOUT
          </Link>
          <Link href={"/programs"} className="btn btn-nav">
            PROGRAMS
          </Link>
          <Link href={"/careers"} className="btn btn-nav">
            CAREERS
          </Link>
          <Link href={"/employee"} className="btn btn-nav">
            EMPLOYEE PORTAL
          </Link>
        </div>
        <div className="line "></div>
      </nav>
    </header>
  );
}
