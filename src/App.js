import React from "react";
import { CartWidget } from "./CartWidget";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./containers/ItemListContainer"

const App = () => {

  const userName = "Facundo";
  const greeting = "Las mejores ofertas"

  return (
    <>
<Navbar name={userName}>

<CartWidget/>
</Navbar>
<ItemListContainer greeting ="Las mejores ofertas"/>
</>

  )
};

export default App;
