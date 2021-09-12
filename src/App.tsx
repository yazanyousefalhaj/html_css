import React from 'react'
import { HomePage } from 'pages/home/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { BlurBackground } from 'components/blur_background/BlurBackground';
import { NavBar } from 'components/navbar/NavBar';
import { AboutPage } from 'pages/about';
import { SuppliersPage } from 'pages/suppliers';
import { ProductsPage } from 'pages/products';
import { ContactPage } from 'pages/contact';
import { CreateItemPage } from 'pages/create-item/create-item';


const App: React.FC = () => {

  return (
    <Router>
      <BlurBackground>
      <div className="container">
          <NavBar />

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/suppliers" exact component={SuppliersPage} />
            <Route path="/products" exact component={ProductsPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/create-item" exact component={CreateItemPage} />
            <Route path="/">
              <h1>Nothing</h1>
            </Route>
          </Switch>

      </div>
        </BlurBackground>
    </Router>
  );
}

export default App;
