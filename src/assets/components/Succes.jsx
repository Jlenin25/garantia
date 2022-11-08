import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie/cjs/Cookies";

const cookies = new Cookies();
class Succes extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  state = {};

  deslog(){
    cookies.set('logged', '0', {path:"/"});
    window.location.href = '/';
  }
  render() {
    return (
      <>
        <h1>exito</h1>
        <input
          className="btn btn-success w-100"
          type="submit"
          value={cookies.get('logged')}
          onClick={this.deslog}        />
      </>
    );
  }
}

export default Succes;
