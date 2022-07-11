import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../views/Home/index";
import Results from "../views/Results/index";
import Details from "../views/Details/index";

function RoutesComponent() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesComponent;
