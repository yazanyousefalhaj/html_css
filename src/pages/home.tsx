import React from "react"
import { heroImages, galleryImages, highlightImage } from "data/constants.json";
import { CoffeeItem } from "components/CoffeeItem";
import { CoffeeItemsList } from "components/CoffeeItemsList";
import { Header } from "components/Header";
import { ViewMore } from "components/ViewMore";


export const HomePage: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="d-flex">
          <CoffeeItem {...highlightImage} />

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
    </>
  )
}