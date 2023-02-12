import Navigation from "./Navigation";
import Footer from "./Footer";
import AppHome from "./AppHome";

function Home() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        {/* <h1>Home</h1> */}
        <AppHome />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
