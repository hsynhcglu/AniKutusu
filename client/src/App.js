import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import CreateScreen from "./Screens/CreateScreen";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UpdateScreen from "./Screens/UpdateScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/create" element={<CreateScreen />} />
            <Route path="/update/:id" element={<UpdateScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
