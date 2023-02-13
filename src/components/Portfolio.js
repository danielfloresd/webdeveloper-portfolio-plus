import Navigation from "./Navigation";
import Footer from "./Footer";
import AppGrid from "./AppGrid";
import Button from "react-bootstrap/Button";

function Porfolio() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <h2 className="text-center">Porfolio</h2>
        <AppGrid />
        <a href="https://github.com/danielfloresd?tab=repositories">
          <Button variant="info" size="sm" block>
            View More...
          </Button>
        </a>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Porfolio;
