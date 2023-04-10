import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "components/Footer";
import NavBar from "components/NavBar";

import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Login from "pages/form/login";
import SignUp from "pages/form/signup";
import Images from "pages/Main/Upload";
import Options from "pages/Main/Options";
import Video from "pages/Main/Video";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export default function App() {
  const pathnames = ["/upload", "/#/upload"];

  return (
    <>
      {pathnames.includes(window.location.pathname) ? null : <NavBar />}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload" element={<Images />} />
        <Route path="/options" element={<Options />} />
        <Route path="/video" element={<Video />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
