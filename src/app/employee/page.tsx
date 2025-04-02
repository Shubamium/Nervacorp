"use client";
import React, { useEffect, useRef, useState } from "react";
import "./employee.scss";
import { FaInbox } from "react-icons/fa";
import {
  CgArrowLongLeft,
  CgArrowLongRight,
  CgAttachment,
  CgInbox,
} from "react-icons/cg";
import { GiReturnArrow } from "react-icons/gi";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { VFX } from "@vfx-js/core";
type Props = {};

const pass = "sinyin";
export default function page({}: Props) {
  const [login, setLogin] = useState(false);
  const [active, setActive] = useState("dashboard");

  const [attach, setAttach] = useState(false);
  const pl: { [key: string]: any } = {
    dashboard: <Dashboard />,
    email: (
      <Inbox
        mail={() => {
          setActive("read");
        }}
      />
    ),
    read: (
      <Read
        back={() => {
          setActive("email");
        }}
      />
    ),
  };

  const changeNav = (str: string) => {
    setActive(str);
  };

  const loginRef = useRef(null);
  const gb1 = useRef(null);
  const gb2 = useRef(null);
  useEffect(() => {
    const handleAttach: () => void = () => setAttach(true);
    document.addEventListener("attach", handleAttach);

    return () => {
      document.removeEventListener("attach", handleAttach);
    };
  }, []);
  useEffect(() => {
    const vfx = new VFX();
    if (loginRef.current) {
      vfx.add(loginRef.current, { shader: "glitch", overflow: 300 });
    }
  }, [loginRef]);

  useEffect(() => {
    if (gb2.current) {
      const vfx = new VFX();
      vfx.add(gb2.current, { shader: "glitch", overflow: 300 });
    }
    if (gb1.current) {
      const vfx = new VFX();
      console.log("hey");
      vfx.add(gb1.current, { shader: "glitch", overflow: 300 });
    }
  }, [login]);
  return (
    <main id="page_employee">
      {login ? (
        <div id="mainpage" className="confine">
          <div className="nav">
            <button
              className="btn btn-nav"
              onClick={() => {
                changeNav("dashboard");
              }}
            >
              DASHBOARD
            </button>
            <button
              className="btn btn-nav"
              onClick={() => {
                changeNav("email");
              }}
            >
              EMAIL
            </button>
            <button className="btn btn-nav glitch " ref={gb1}>
              _̶͔̘͎͒́͝+̵̺̀̔͌͜_̸̜̭͛≠͈̻̬͐_̵͍̾̏+̴̗̲̞̒͝_̵̤̃͝+̴̤̈́̕
            </button>
            <button className="btn btn-nav glitch" ref={gb2}>
              -̶̥̔̈;̶̛̻͑'̸̬̗̓͘;̸͔̤̓-̴̝̮͛̿;̶̻̽̈́-̴̜̺̀̕;̴̩̓'̶̬̖̿-̴̖̈́̚;̷̳̊͘
            </button>
          </div>
          <div className="content">{pl[active]}</div>
        </div>
      ) : (
        <Login
          ref={loginRef}
          onLogin={() => {
            // if (loginGlitch) {
            // loginGlitch.stopGlitch();
            // }
            setLogin(true);
          }}
        />
      )}

      <div
        id="attachview"
        className={attach ? " show" : "hid"}
        onClick={() => {
          setAttach(false);
        }}
      >
        <img src="/g/attachment.png" alt="" className="mimg" />
        <h2 className="title">
          A group photo taken at a Sunflower Orphanage fundraiser.
        </h2>
        <p className="desc">
          This image remains within internal archives and is not authorized for
          external use. Clearance breach will result in suspension of
          privileges.
        </p>
        <p className="close">PRESS ANYWHERE TO CLOSE</p>
      </div>

      <div className="other">
        <div id="login"></div>
      </div>
    </main>
  );
}

function Login({ onLogin, ref }: any) {
  const [pf, setPf] = useState("");
  const [message, setMessage] = useState("");
  const tryLogin = () => {
    if (pf == pass) {
      onLogin();
    } else {
      setMessage("Invalid Password");
    }
  };
  return (
    <div id="login">
      <form
        className="panel"
        onSubmit={(e) => {
          e.preventDefault();
          tryLogin();
        }}
      >
        <h2 className="hg">EMPLOYEE PORTAL</h2>
        <input
          type="password"
          placeholder="Enter password..."
          value={pf}
          onChange={(e) => {
            setPf(e.target.value);
          }}
        />
        <button className="btn btn-nav" type="submit" ref={ref}>
          LOGIN
        </button>
        <p className="warn">{message}</p>
      </form>
    </div>
  );
}

function Dashboard() {
  return (
    <div id="dashboard">
      <p>Welcome, *******</p>
    </div>
  );
}

function Inbox({ mail }: any) {
  return (
    <div id="inbox">
      <div className="h">
        <h2>INBOX</h2>
        <CgInbox />
      </div>

      <div className="ml">
        <div className="btn m" onClick={mail}>
          <h3 className="from">Dr. Arin L. Kal</h3>
          <p className="sub">
            Tiny Tech Titan – Cinder Unveils Voice-Mod Larynx Implant!...
          </p>
          <p className="status">UNREAD</p>
        </div>
        <div className="m e"></div>
        <div className="m e"></div>
        <div className="m e"></div>
        <div className="m e"></div>
        <div className="m e"></div>

        <div className="controls">
          <button className="btn-c">
            <CgArrowLongLeft />{" "}
          </button>
          <button className="btn-c">
            <CgArrowLongRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

function Read({ back }: any) {
  return (
    <div id="mail">
      <div className="mhead">
        <div className="field">
          <h3>SUBJECT:</h3>
          <p>Tiny Tech Titan – Cinder Unveils Voice-Mod Larynx Implant!</p>
        </div>
        <div className="field">
          <h3>FROM:</h3>
          <p>Dr. Arin L. Kal, Head of R&D Communications </p>
        </div>
        <div className="field">
          <h3>TO:</h3>
          <p>All Staff</p>
        </div>
        <div className="field">
          <h3>CC:</h3>
          <p>Cinder E. Albair</p>
        </div>
      </div>
      <div className="mbody">
        <p>
          Move over, senior engineers—Cinder E. Albair, NervaCorp’s youngest
          certified staff member at just twelve years old, has officially
          debuted the prototype for the Larynx Implant: a fully integrated
          neural voice module designed to assist patients with vocal
          impairments. “It’s not just for talking again,” Cinder explains with a
          grin. “It’s for talking how you wanna talk! You wanna sound like a
          robot? An alien? Matsune Hiku? Boom, done!”. Built with modular voice
          filters and emotion-adaptive pitch mapping, the implant allows users
          to regain control over their speech—or stylize it completely. Cinder
          assures the voice distortion features are "just for fun!" though
          internal reviews are ongoing. 
        </p>
        <p>
          Raised at Sunflower Orphanage, Cinder entered NervaCorp’s development
          program after scoring beyond Tier 4 on our cognitive aptitude track at
          age five. Known for his weekly game streams and quoting internet memes
          in the lab, Cinder brings innovation and chaos in equal measure.
        </p>
      </div>
      <div className="mfoo">
        <div className="l">
          <button className="btn btn-back" onClick={back}>
            <MdOutlineKeyboardReturn />
          </button>
          <div
            className="attachments btn"
            onClick={() => {
              const event = new CustomEvent("attach");

              document.dispatchEvent(event);
            }}
          >
            <div className="at-h">
              <p className="title">
                Attachements <CgAttachment />
              </p>
              <p>1 file(s)</p>
            </div>
            <div className="at-b">
              <img src="/g/attachment.png" alt="" />
              <p>Archived Fundraiser – Seven Years Ago</p>
            </div>
          </div>
        </div>
        <div className="r">
          <button className="btn-l">REPLY</button>
          <button className="btn-l">FORWARD</button>
        </div>
      </div>
    </div>
  );
}
