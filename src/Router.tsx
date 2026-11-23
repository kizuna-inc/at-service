import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/Home";

import { Login } from "./pages/Login";

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />

        {/* Error Handling */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
 ) 
}