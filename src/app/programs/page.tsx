import "./programs.scss";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main id="programs">
      <div className="confine">
        <h2 className="hg">PROGRAMS</h2>
        <p>
          At NervaCorp, our research and development initiatives are designed to
          push the boundaries of what’s medically and humanly possible. Our
          programs focus on long-term innovations in biomedical engineering,
          neuro-assistive technology, and cognitive health.
        </p>

        <div className="plist">
          <div className="p">
            <h2>Neural Prosthetics Integration Initiative</h2>
            <p>
              Developing responsive prosthetics linked directly to neural
              signals for real-time motion control and sensory feedback. 
            </p>
          </div>
          <div className="p">
            <h2>Memory Preservation Systems</h2>
            <p>
              Investigating safe, ethical methods of memory recording for
              patients with degenerative cognitive conditions.
            </p>
          </div>
          <div className="p">
            <h2>Speech Neurotherapy Unit</h2>
            <p>
              Creating non-invasive implants and neural routing systems to aid
              patients with speech impairments.
            </p>
          </div>
          <div className="p">
            <h2>Cognitive Rehabilitation Research</h2>
            <p>
              Exploring therapeutic interventions for trauma-affected
              individuals and those recovering from neurological surgery.
            </p>
          </div>
          <div className="p">
            <h2>Sensory Augmentation Trials</h2>
            <p>
              Investigating enhancements for sensory perception to support
              individuals with visual or auditory deficits.
            </p>
          </div>
          <div className="p">
            <h2>Sunflower Partnership Program</h2>
            <p>
              NervaCorp is proud to sponsor the Sunflower Orphanage, a long-term
              care institution dedicated to supporting underprivileged and
              underserved youth. Through our partnership, we provide early
              access to education in science, technology, and
              engineering—empowering young minds to explore their potential in a
              safe and nurturing environment. Select participants may join
              NervaCorp’s Junior Innovator Track, a mentorship program designed
              to guide exceptional students toward future careers in research,
              engineering, and biotech development.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
