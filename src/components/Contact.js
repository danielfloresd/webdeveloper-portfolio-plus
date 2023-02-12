import Navigation from "./Navigation";
import Footer from "./Footer";
import AppForm from "./AppForm";

function Contact() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        {/* <h1>Contact</h1> */}
        <AppForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;