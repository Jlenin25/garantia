import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Login from "./assets/pages/Login";
import Succes from "./assets/pages/Succes";
import Dashboard from "./assets/pages/Dashboard";
import Register from "./assets/pages/Register";

import Cookies from "universal-cookie";
import Productos from "./assets/pages/Productos";

const cookies = new Cookies();

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    logged: cookies.get("logged"),
  };

  // componentDidMount(){
  //   console.log("primer aviso");
  //   this.render();
  //   // if (this.state.logged > 0) {
  //   //   console.log("Segundo");
  //   //   <Link to={"/succes"}></Link>
  //   // }
  // }
  CambiarEstado = () => {
    if (this.state.logged == 0) {
      this.setState({
        logged: 1,
      });
      cookies.set("logged", "1", { path: "/" });
      // return this.renderApp();
    } else {
      this.setState({
        logged: 0,
      });
      cookies.set("logged", "0", { path: "/" });
      // return this.renderLogin();
    }
  };
  returnLogin() {
    window.history.pushState(null, "", "");
  }
  renderLogin() {
    return (
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Login CambiarEstado={this.CambiarEstado}></Login>}
          ></Route>
          <Route
            exact
            path="/register"
            element={<Register CambiarEstado={this.CambiarEstado}></Register>}
          ></Route>
          <Route exact path="*" element={<>ERROR: 404</>}></Route>
        </Routes>
      </Router>
    );
  }

  renderApp() {
    return (
      <Router>
        <div className="container">
          <Routes>
            {/* <Route
              exact
              path="/register"
              element={<Register CambiarEstado={this.CambiarEstado}></Register>}
            ></Route> */}
            <Route
              exact
              path="/success"
              element={<Succes CambiarEstado={this.CambiarEstado}></Succes>}
            ></Route>
            <Route
              exact
              path="/"
              element={<Dashboard></Dashboard>}
            ></Route>
               <Route
              exact
              path="/productos"
              element={<Productos></Productos>}
            ></Route>
            {/*=============================== RUTA PARA ERRORES ===============================*/}
            <Route exact path="*" element={<>ERROR: 404</>}></Route>
            {/*========================= RUTA PARA VOLVER AL DASHBOARD ========================= */}
          </Routes>
        </div>
      </Router>
    );
  }

  render() {
    console.log(this.state.logged);
    console.log(cookies.get("logged"));
    if (this.state.logged > 0) {
      console.log("PASOLOGIN");
      return this.renderApp();
    } else {
      console.log("no paso");
      return this.renderLogin();
    }
  }
}

export default App;
