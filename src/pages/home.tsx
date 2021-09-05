import React from "react"
import { CoffeeItem } from "components/coffee_item/CoffeeItem";
import { CoffeeItemsList } from "components/CoffeeItemsList";
import { Header } from "components/header/Header";
import { ViewMore } from "components/view_more/ViewMore";


export const HomePage: React.FC = () => {
  const images = JSON.parse(localStorage.getItem("images") as string)
  return (
    <>
      <section className="hero">
        <div className="d-flex">
          <CoffeeItem {...images[0]} />

          <div className="main-items-wrapper">
            <Header />

            <CoffeeItemsList list={images.slice(1, 4)} />

            <ViewMore />
          </div>
        </div>
      </section>

      <div className="gradient-bg">
        <section className="gallery">
          <CoffeeItemsList list={images.slice(4)} />
        </section>
      </div>
    </>
  )
}