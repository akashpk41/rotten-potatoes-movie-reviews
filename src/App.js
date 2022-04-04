import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Home/Homepage";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/Not_Found/NotFound";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/home" element={ <Homepage /> } />
        <Route path="/reviews" element={ <Reviews />  } />
        <Route path="/dashboard" element={ <Dashboard />  } />
        <Route path="/blogs" element={ <Blogs /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
