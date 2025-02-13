import React from "react";
import ItemList from "./itemList";

const Main = () => {
  return (
    <div className="main">
      {/* Item List de Artistas*/}
      <ItemList />

      {/* Item List de Músicas*/}
      <ItemList />
    </div>
  );
};

export default Main;
