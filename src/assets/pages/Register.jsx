import React from "react";
import "../css/RegisterPlantilla.css";
import Api from "../services/Api";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  sendData = (e) =>{
    e.preventDefault();

    var dataSend = {
        user : 2,
        nombre: document.getElementById("nombre").value,
        ap_paterno: document.getElementById("ap_paterno").value,
        ap_materno: document.getElementById("ap_materno").value,
        dni: document.getElementById("dni").value,
        contrasena: document.getElementById("contrasena").value,
        direccion: document.getElementById("direccion").value,
        celular: document.getElementById("celular").value,
        genero: document.getElementById("genero").value,
        foto: document.getElementById("foto").value,
    }
    
    fetch(Api + "cruds/usuarios/?register=", {
      method: "POST",
      body: JSON.stringify(dataSend),
    })
      .then((Response) => Response.json())
      .then((dataResponse) => {
        console.log(dataResponse);
        
      })
      .catch(console.log());
  }
  render() {
    
    return (
      <div id="__next">
        <main className="MuiBox-root css-42lgqe">
          <div className="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
            <form onSubmit={this.sendData} encType="multipart/form-data">
              <div className="MuiBox-root css-5vb4lz">
                <h4 className="MuiTypography-root MuiTypography-h4 css-2voflx">
                  Create a new account
                </h4>
                <p className="MuiTypography-root MuiTypography-body2 MuiTypography-gutterBottom css-imsni4">
                  Use your email to create a new account
                </p>
              </div>
              <div className="flex-form">
                <div className="max-width-48">
                  <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                      <input
                        aria-invalid="false"
                        id="nombre"
                        name="firstName"
                        type="text"
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                        placeholder="Nombre"
                      />
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-17cylm7"
                      ></fieldset>
                    </div>
                  </div>
                  <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                      <input
                        aria-invalid="false"
                        id="ap_paterno"
                        name="firstName"
                        type="text"
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                        placeholder="Apellido Paterno"
                      />
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-17cylm7"
                      ></fieldset>
                    </div>
                  </div>
                  <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                      <input
                        aria-invalid="false"
                        id="ap_materno"
                        name="lastName"
                        type="text"
                        placeholder="Apellido Materno"
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                      />
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-17cylm7"
                      ></fieldset>
                    </div>
                  </div>
                  <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                      <input
                        aria-invalid="false"
                        id="dni"
                        name="email"
                        type="text"
                        placeholder="DNI"
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                      />
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-17cylm7"
                      ></fieldset>
                    </div>
                  </div>
                  <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                      <input
                        aria-invalid="false"
                        id="contrasena"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                      />
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-17cylm7"
                      ></fieldset>
                    </div>
                  </div>
                </div>
                <div className="max-width-48">
                  <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                      <input
                        aria-invalid="false"
                        id="direccion"
                        name="password"
                        type="text"
                        placeholder="Dirección"
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                      />
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-17cylm7"
                      ></fieldset>
                    </div>
                  </div>
                  <div className="css-1u0h3mu ">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                      <input
                        aria-invalid="false"
                        id="celular"
                        name="password"
                        type="tel"
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                        placeholder="Celular"
                      />
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-17cylm7"
                      ></fieldset>
                    </div>
                  </div>
                  <div className="css-1u0h3mu">
                    <div className="css-yrb7tp">
                      <select className="css-j6vbi8 graycolor" defaultValue={'default'} id="genero">
                        <option value={'default'} disabled>
                          Género
                        </option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                      </select>
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-17cylm7"
                      ></fieldset>
                    </div>
                  </div>
                  <div className="css-1u0h3mu">
                    <div className="css-yrb7tp">
                      <input type="file" className="css-j6vbi8 graycolor" id="foto" />
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-17cylm7"
                      ></fieldset>
                    </div>
                  </div>
                </div>
              </div>

              <div className="MuiBox-root css-1sf3xto">
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-disableElevation MuiButton-fullWidth css-1nltg4l"
                  tabIndex="0"
                  type="submit"
                >
                  Sign Up Now
                </button>
              </div>
              <p className="MuiTypography-root MuiTypography-body2 css-f1egar">
                Have an account <a
                  className="MuiTypography-root MuiTypography-subtitle2 MuiLink-root MuiLink-underlineHover css-bf2lcv"
                  href="http://localhost:3000/"
                >
                  Sign In
                </a>
              </p>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default Register;
