// Components
import Footer from "./Components/UI/Footer";
import Navbar from "./Components/Navigation/Navbar";

// Pages
import Home from "./Pages/Home";
import Massages from "./Pages/Massages";
import Contact from "./Pages/Contact";

// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="App w-full h-screen flex items-center flex-col justify-between text-white bg-dark">
      <Navbar />

      {/* Routing */}
      <Routes>
        <Route path="/bodyshine-react" element={<Home />} />
        <Route path="/bodyshine-react/Massages" element={<Massages />} />
        <Route path="/bodyshine-react/Contact" element={<Contact />} />
      </Routes>



      <Footer />
    </main>
  );
}

export default App;
