import logo from "./logo.svg";
import "./App.css";
import Tablee from "./components/Table";
import AddCity from "./components/AddCity";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCountry from "./components/AddCountry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/add-city" element={<AddCity/>}/>
          <Route path="/add-country" element={<AddCountry/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
