import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Live from "./pages/Live";
import Home from "./pages/home";
import Guest from "./pages/Guest";
import Connect from "./pages/Connect";
import Messages from "./pages/Message";
import Contact from "./pages/Contact";
import Give from "./pages/Give";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
        </Routes>
        <Routes>
          <Route path="/Live" exact element={<Live></Live>}></Route>
        </Routes>
        <Routes>
          <Route path="/Guest" exact element={<Guest></Guest>}></Route>
        </Routes>
        <Routes>
          <Route path="/Connect" exact element={<Connect></Connect>}></Route>
        </Routes>
        <Routes>
          <Route path="/Messages" exact element={<Messages></Messages>}></Route>
        </Routes>
        <Routes>
          <Route path="/Contact" exact element={<Contact></Contact>}></Route>
        </Routes>
        <Routes>
          <Route path="/Give" exact element={<Give></Give>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
