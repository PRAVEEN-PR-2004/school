// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities.js";
import HoneyMoon from "./pages/HoneyMoon";
import GroupTour from "./pages/GroupTour";
import Packages from "./pages/Packages";
import Wedding from "./pages/Wedding";

import Aboutus from "./pages/Aboutus";
import Appbar from "./components/Appbar";
import Topbar from "./components/Topbar";
import FullPackages from "./components/FullPackages";
import ShowGtours from "./components/ShowGtours";
import ContactForGroup from "./pages/ContactForGroup.js";
import Email from "./pages/Email.js";
import Whatsapp from "./pages/Whatsapp.js";
import Events from "./pages/Events.js";

function App() {
  return (
    <>
      <Topbar />
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/facilities" element={<Facilities />}></Route>
        <Route path="/grouptour" element={<GroupTour />}></Route>
        <Route path="/packages" element={<Packages />}></Route>
        <Route path="/wedding" element={<Wedding />}></Route>
        <Route path="/honeymoon" element={<HoneyMoon />}></Route>
        <Route path="/contact/:city" element={<Contact />}></Route>
        <Route path="/fullpackage/:id" element={<FullPackages />}></Route>
        <Route path="/showgrouptour/:id" element={<ShowGtours />}></Route>
        <Route path="/contactus" element={<Email />}></Route>
        <Route path="/whatsapp" element={<Whatsapp />}></Route>
        <Route path="/events" element={<Events />}></Route>

        <Route
          path="/ContactForGroup/:group"
          element={<ContactForGroup />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
