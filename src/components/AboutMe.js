import Navigation from "./Navigation";
import Footer from "./Footer";
import AppHome from "./AppHome";

function AboutMe() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <h3>
          Innovator and software engineer with 20+ of experience in the design,
          development, and implementation of embedded systems. Experienced in
          all aspects of the business from start-up, development, and
          operations. A strong believer in lifelong learning.
        </h3>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AboutMe;
