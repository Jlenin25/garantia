import React from "react";
import "../css/RegisterPlantilla.css";
import Api from "../services/Api";
import $ from "jquery";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};

  sendData = (e) => {
    e.preventDefault();

    const inputFile = document.getElementById("foto");

    if (inputFile.files.length > 0) {
      var dataSend = {
        nombre: document.getElementById("nombre").value,
        ap_paterno: document.getElementById("ap_paterno").value,
        ap_materno: document.getElementById("ap_materno").value,
        dni: document.getElementById("dni").value,
        contrasena: document.getElementById("contrasena").value,
        direccion: document.getElementById("direccion").value,
        celular: document.getElementById("celular").value,
        genero: document.getElementById("genero").value,
        fotoname: document.getElementById("foto").files[0].name,
      };

      let formData = new FormData();
      formData.append("archivo", inputFile.files[0]);
      fetch(Api + "cruds/img/index.php", {
        method: "POST",
        body: formData,
      })
        .then((respuesta) => respuesta.text())
        .then((decodificado) => {
          console.log(decodificado);
        });
    } else {
      var dataSend = {
        nombre: document.getElementById("nombre").value,
        ap_paterno: document.getElementById("ap_paterno").value,
        ap_materno: document.getElementById("ap_materno").value,
        dni: document.getElementById("dni").value,
        contrasena: document.getElementById("contrasena").value,
        direccion: document.getElementById("direccion").value,
        celular: document.getElementById("celular").value,
        genero: document.getElementById("genero").value,
        fotoname: "sinfoto.png",
      };
    }

    fetch(Api + "cruds/usuarios/?register=", {
      method: "POST",
      body: JSON.stringify(dataSend),
    })
      .then((Response) => Response.json())
      .then((dataResponse) => {
        console.log(dataResponse);
        window.alert("¡ATENCIÓN!\tSu usuario es :" + dataResponse);
        window.location.href = "/";
      })
      .catch(console.log());
  };
  render() {
    return (
      <div id="__next">
        <main className="MuiBox-root css-42lgqe">
          <div className="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln">
            <form
              onSubmit={this.sendData}
              encType="multipart/form-data"
              id="form"
            >
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
                        required
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
                        required
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
                        required
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
                        required
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
                        required
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
                        required
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
                      <select
                        required
                        className="css-j6vbi8 graycolor"
                        id="genero"
                      >
                        <option value="">Género</option>
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
                      <input
                        type="file"
                        className="css-j6vbi8 graycolor"
                        id="foto"
                        name="foto"
                      />
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
                  id="btnRegistrar"
                >
                  Sign Up Now
                </button>
              </div>
              <p className="MuiTypography-root MuiTypography-body2 css-f1egar">
                Have an account{" "}
                <a
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
