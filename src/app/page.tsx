import "./about.scss";
export default function Home() {
  return (
    <main className={"main"}>
      <section id="about">
        <img src="/d/bgtext.png" alt="" className="bg-text" />
        <div className="confine">
          <div className="l">
            <h2 className="hg">ABOUT</h2>
            <p>
              At NervaCorp, we are dedicated to unlocking the extraordinary
              potential of <strong>the human mind</strong>. Through cutting-edge
              advancements in neuroscience, neural prosthetics, and cognitive
              engineering, our mission is to enhance life, thought, and human
              capability.
            </p>
          </div>
          <div className="c">
            <img src="./g/brain.png" alt="" />
          </div>
          <div className="r">
            <p>
              From redefining rehabilitation solutions to pioneering
              breakthroughs in gifted neuroadaptive integration, NervaCorp
              stands at the intersection of{" "}
              <strong> medicine and innovation</strong>. Our commitment is
              simple: build a better future—one synapse at a time. 
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
