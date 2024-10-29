import chester from "../assets/images/Chester.jpeg"

function AboutMe() {
    return (
      <section>
        <h2>About Me</h2>
        <img src={chester} alt="Ethan's Dog" className="chester" />
        <p>Ethan Carr is a curious and dynamic learner making his way from the kitchen to the keyboard. With a background in culinary arts and environmental work, Ethan’s journey into tech is as eclectic as his interests. When he’s not writing code, you’ll find him practicing piano, exploring new skateboarding tricks, or reading about sharks. With a recent full-stack certificate under his belt, Ethan combines his varied experiences with a fresh perspective on software engineering—navigating new challenges, learning as he goes, and enjoying the ride.</p>
      </section>
    );
  }
  
  export default AboutMe;