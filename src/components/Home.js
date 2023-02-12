import Navigation from "./Navigation";
import Footer from "./Footer";
import AppHome from "./AppHome";

function Home({css}) {
  return (
    <div>
      <header>
        <Navigation/>
      </header>
      <main>
        <h2 className="text-center">Home</h2>
        <AppHome />
      </main>
      <footer>
        <Footer theme={css}/>
      </footer>
    </div>
  );
}

export default Home;
