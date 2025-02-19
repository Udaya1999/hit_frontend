import { Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Routing from "./Routing";

function App() {
  return (
    <>
    <Header />
 <Routing />
 
  <Footer /> 
     
     
    </>
  );
}
export default App;
