import Navigation from "./Navigation";
import Footer from "./Footer";
import AppGrid from "./AppGrid";

function Porfolio() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        {/* <h1>Porfolio</h1> */}
        <AppGrid />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Porfolio;
