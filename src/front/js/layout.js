import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Cards } from "./pages/cards";
import { CardsGrid } from "./pages/cardsGrid";
import { Login1 } from "./pages/login1";
import { Register } from "./pages/register"
import  WhishList  from "./pages/wishList";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="main-container">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login1">
              <Login1 />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/cards/:placeId">
              <Cards />
            </Route>
            <Route exact path="/cardsGrid">
              <CardsGrid />
            </Route>
            <Route exact path="/whishList">
              <WhishList />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
