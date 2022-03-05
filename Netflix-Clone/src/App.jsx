import { Routes,Route } from "react-router-dom"
import Home from './component/Home';
export default function App(){
  return(
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="fav" element={<FavList />} />
    </Routes>
  </div>
  );
}

