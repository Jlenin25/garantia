import React from "react";

class Succes extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  state = {};
  render() {
    return (
      <>
        <h1>exito</h1>
        <input
          className="btn btn-success w-100"
          type="submit"
          value="CERRAR SESIÓN"
        />
      </>
    );
  }
}

export default Succes;
