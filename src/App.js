// import VerAula from "./component/VerAula";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Company from "./component/pages/Company";
import Contact from "./component/pages/Contact";
import NewProject from "./component/pages/NewProject";
import Projects from "./component/pages/Projects";

// style
import Container from "./component/layout/Container";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";

function App() {
  return (
    <Router>
      {/* <VerAula /> */}
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
