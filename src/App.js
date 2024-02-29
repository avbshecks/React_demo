import { Route, Routes } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUps from "./pages/NewMeetUps";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";
import Home from "./components/menu/Home";
import Contact from "./pages/Contact";
import AllProfileCards from "./components/pdas/AllProfileCards";
import Animals from "./components/animals/Animals";
import SeachApp from "./components/search/SeachApp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUps />} />
        <Route path="/new-meetups" element={<NewMeetUps />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profileCard" element={<AllProfileCards />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/search" element={<SeachApp />} />
      </Routes>
    </Layout>
  );
}

export default App;
