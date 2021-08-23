import './App.css';
import { BlurBackground } from './components/BlurBackground';
import { CoffeeItem } from './components/CoffeeItem';
import { Header } from './components/Header';
import { NavBar } from './components/navbar/NavBar'
import { ViewMore } from './components/ViewMore';


function App() {

  const heroImages = [
    {
      imageSrc: "assets/images/Iced Coffee.png", altText: "Iced Coffee", title: "Iced Coffee"
    },
    {
      imageSrc: "assets/images/Caramel Frappe.png", altText: "Caramel Frappe", title: "Caramel Frappe"
    },
    {
      imageSrc: "assets/images/MOcha Late 02.png", altText: "Mocha Late", title: "Mocha Late"
    },
  ]

  const galleryImages = [
    {
      imageSrc: "assets/images/MOcha Late 02.png", altText: "Mocha Late", title: "Mocha Late"
    },
    {
      imageSrc: "assets/images/MOcha Late 02.png", altText: "Mocha Late", title: "Mocha Late"
    },
    {
      imageSrc: "assets/images/MOcha Late 02.png", altText: "Mocha Late", title: "Mocha Late"
    },
    {
      imageSrc: "assets/images/MOcha Late 02.png", altText: "Mocha Late", title: "Mocha Late"
    },
    {
      imageSrc: "assets/images/Double espresso.png", altText: "Double espresso", title: "Double espresso"
    },
    {
      imageSrc: "assets/images/Double espresso.png", altText: "Double espresso", title: "Double espresso"
    },
    {
      imageSrc: "assets/images/Double espresso.png", altText: "Double espresso", title: "Double espresso"
    },
    {
      imageSrc: "assets/images/Double espresso.png", altText: "Double espresso", title: "Double espresso"
    },
  ]

  return (
    <div className="container">

      <BlurBackground>

        <NavBar />


        <section className="hero">
          <div className="d-flex">

            <CoffeeItem imageSrc="assets/images/MOCHA LATE.png" altText="Mocha Late" title="Mocha Late" highlight={true} />

            <div className="main-items-wrapper">
              <Header />

              {heroImages.map(imageAttrs => (<CoffeeItem {...imageAttrs} />))}

              <ViewMore />

            </div>
          </div>
        </section>

        <div className="gradient-bg">
          <section className="gallery">
            {galleryImages.map(imageAttrs => (<CoffeeItem {...imageAttrs} />))}
          </section>
        </div>
      </BlurBackground>
    </div>
  );
}

export default App;
