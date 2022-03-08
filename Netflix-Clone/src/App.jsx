import { Routes,Route } from "react-router-dom"

import Home from "./component/Home";
import FavList from "./component/FavList";

export default function App(){
  return(
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/fav" element={<FavList/>} />
    </Routes>
  );
}

