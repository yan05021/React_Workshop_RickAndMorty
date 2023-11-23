import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
    );
};

export default Router;
