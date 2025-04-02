import React from "react";
import "./careers.scss";
type Props = {};

export default function Careers({}: Props) {
  return (
    <main id="page_careers">
      <section id="careers" className="confine">
        <div className="heading">
          <h2 className="hg">CAREERS AT NERVACORP</h2>
          <p>Join a future-focused company where innovation meets impact. </p>
          <div className="pos">
            <div className="l"></div>
            <p>Available Positions</p>
            <div className="l"></div>
          </div>

          <div className="clist">
            <div className="c">
              <h2>Clinical Neurotech Research Assistant</h2>
              <p>Assist in field trials for neural interface calibration. </p>
            </div>
            <div className="c">
              <h2>Administrative Coordinator</h2>
              <p>Assist in field trials for neural interface calibration. </p>
            </div>
            <div className="c">
              <h2>Software Engineer, Cognitive Mapping Division</h2>
              <p>
                Design AI-assisted neural models{" "}
                <span> (requires clearance level 2)</span> 
              </p>
            </div>
            <div className="c">
              <h2>Outreach Liaison</h2>
              <p>
                Coordinate with partnered institutions and monitor development
                benchmarks 
              </p>
            </div>
            <div className="c">
              <h2>Night Shift Logistics Operator</h2>
              <p>
                Maintain and transport sealed bio-units.
                <span>(Non-disclosure mandatory.)</span> 
              </p>
            </div>
            <div className="c">
              <h2>Behavioral Response Auditor</h2>
              <p>
                 Observe and document subject reactions during REM induction
                trials.
              </p>
            </div>
            <div className="c">
              <h2>Embedded Systems Custodian</h2>
              <p> Maintain neurological simulation chambers at remote sites.</p>
            </div>
          </div>
          <p className="war">
            NervaCorp is an equal-opportunity employer. All applicants are
            subject to aptitude screening.{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
