import React, { useState } from "react"
import { CoffeeItemsList } from "components/CoffeeItemsList";
import { Header } from "components/header/Header";
import "./home.css"


export const HomePage: React.FC = () => {
  const [images, setImages] = useState(JSON.parse(localStorage.getItem("images") as string))
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const onSelected = (id: number) => {
    if (selectedItems.includes(id)) {
      selectedItems.splice(selectedItems.indexOf(id), 1)
    } else {
      selectedItems.push(id)
    }
  }

  const onDeleteItems = () => {
    const newImages = images.filter((image: any) => !selectedItems.includes(image.id))
    localStorage.setItem("images", JSON.stringify(newImages))
    setImages(newImages)
    setSelectedItems([])
    console.log("why?")
  }

  return (
    <>
      <section className="hero">
        <Header onDeleteItems={onDeleteItems} />

        <CoffeeItemsList list={images} onSelected={onSelected}/>
      </section>

      {/* <div className="gradient-bg">
        <section className="gallery">
          <CoffeeItemsList list={images.slice(4)} />
        </section>
      </div> */}
    </>
  )
}