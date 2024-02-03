import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Login from "./components/Login";
import { Cart } from "./components/Cart";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element ={<Login/>} />
        <Route path="/products" element ={<Hero />} />
        <Route path="/login" element ={<Login />}/>
        <Route path="/cart" element = {<Cart />} />
  
        
      </Routes>
    </Router>
  );
}

export default App;
