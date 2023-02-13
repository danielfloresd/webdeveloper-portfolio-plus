import React from "react";

import About from "./AboutMe";
import Contact from "./Contact";
import PageContent from "./PageContent";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Page({currentPage}) {
  const renderPage = () => {
    switch (currentPage.name) {
    case "About Me":
      return <About />;
    case "Portfolio":
      return <Portfolio />;
    case "Resume":
      return <Resume />;
    case "Contact":
      return <Contact />;
    default:
      return <About />;
    }
  };
  return (
    <section className="p-4 container-fluid">
      <h2 className="text-center">{currentPage.name}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}

export default Page;
