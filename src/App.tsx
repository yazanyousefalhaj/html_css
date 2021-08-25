import React from 'react'
import "./App.css";
import heroImages from "./data/heroImages.json";
import galleryImages from "./data/galleryImages.json";
import { BlurBackground } from "./components/BlurBackground";
import { CoffeeItem } from "./components/CoffeeItem";
import { CoffeeItemsList } from "./components/CoffeeItemsList";
import { Header } from "./components/Header";
import { NavBar } from "./components/navbar/NavBar";
import { ViewMore } from "./components/ViewMore";


const App: React.FC = () => {

  return (
    <div className="container">
      <BlurBackground>
        <NavBar />

        <section className="hero">
          <div className="d-flex">
            <CoffeeItem
              imageSrc="assets/images/MOCHA LATE.png"
              altText="Mocha Late"
              title="Mocha Late"
              description="Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species."
              highlight={true}
            />

            <div className="main-items-wrapper">
              <Header />

              <CoffeeItemsList list={heroImages} />

              <ViewMore />
            </div>
          </div>
        </section>

        <div className="gradient-bg">
          <section className="gallery">
            <CoffeeItemsList list={galleryImages} />
          </section>
        </div>
      </BlurBackground>
    </div>
  );
}

export default App;
