import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Navbar from "./Navbar";
function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

