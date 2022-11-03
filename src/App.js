import React from "react";
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./assets/components/Login";
import Succes from "./assets/components/Succes"



function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Login></Login>}></Route>
          <Route exact path="/succes" element={<Succes></Succes>}></Route>
          {/*=============================== RUTA PARA ERRORES ===============================*/}
          <Route exact path="*" element={<>ERROR: 404</>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
