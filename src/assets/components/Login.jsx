import React from "react";
import "../css/Login.css";
import Api from "../services/Api";
// import "../../../php/cruds/auth/login.php";
class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  state = { dataLoaded: false, usuario: [] };

  changeValue = (e) => {
    const state = this.state.usuario;
    state[e.target.name] = e.target.value;
    this.setState({ state });
  };
  sendData = (e) => {
    e.preventDefault();
    const { user } = this.state.usuario;
    var dataSend = {
      user: document.getElementById("user").value,
      contrasena: document.getElementById("password").value,
    };
    fetch(Api + "cruds/usuarios/?consultar=" + user, {
      method: "POST",
      body: JSON.stringify(dataSend),
    })
      .then((Response) => Response.json())
      .then((dataResponse) => {
        if (dataResponse[1]["success"] == 1) {
          if (dataResponse[0][0]["contrasena"] === dataSend.contrasena) {
            window.location.href = "/succes";
          }else{
            window.alert("Credenciales incorrectas.");
          }
        } else {
          window.alert("Credenciales incorrectas.");
        }
      })
      .catch(console.log());
  };
  render() {
    return (
      <div className="login">
        <h1 className="text-center">Hello Again!</h1>

        <form className="needs-validation" onSubmit={this.sendData}>
          <div className="form-group was-validated">
            <label className="form-label" htmlFor="email">
              USUARIO
            </label>
            <input
              className="form-control"
              type="text"
              name="user"
              id="user"
              required
              onChange={this.changeValue}
            />
            <div className="invalid-feedback">Ingrese su usuario</div>
          </div>
          <div className="form-group was-validated">
            <label className="form-label" htmlFor="password">
              CONTRASEÑA
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              required
              onChange={this.changeValue}
            />
            <div className="invalid-feedback">Ingrese su contraseña</div>
          </div>
          <div className="form-group form-check">
            <input className="form-check-input" type="checkbox" id="check" />
            <label className="form-check-label" htmlFor="check">
              Remember me
            </label>
          </div>
          <input
            className="btn btn-success w-100"
            type="submit"
            value="INGRESAR"
          />
        </form>
      </div>
    );
  }
}

export default Login;
