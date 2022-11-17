import React from "react";
import AsideMenu from "../components/AsideMenu";
import Header from "../components/Header";
import Cookies from "universal-cookie";

const cookies = new Cookies();
class Cuenta extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  GetIds() {
    var Header = document.getElementById("Menu").parentNode.parentNode;
    var AsideMenu = document.getElementById("AsideMenu");
    if (AsideMenu.hasAttribute("hidden")) {
      AsideMenu.removeAttribute("hidden");
      Header.classList.add("changeSize");
    } else {
      Header.classList.remove("changeSize");
      AsideMenu.setAttribute("hidden", "1");
    }
  }

  render() {
    return (
        <>
            <Header GetIds={this.GetIds}></Header>
            <AsideMenu></AsideMenu>
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
                  Edita tus datos
                </h4>
                <p className="MuiTypography-root MuiTypography-body2 MuiTypography-gutterBottom css-imsni4">
                  Ingrese sus datos en los siguientes apartados:
                </p>
              </div>
              <div className="flex-form">
                <div className="max-width-48">
                  <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                      <label
                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled css-1x3fk9d"
                        data-shrink="true"
                        htmlFor=":r0:"
                        id=":r0:-label"
                        
                      >
                        Nombre
                      </label>
                      <input
                        aria-invalid="false"
                        id="nombre"
                        name="firstName"
                        type="text"
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                        placeholder="Nombre"
                        defaultValue={cookies.get("nombre")}
                        
                        required
                      />
                      
                    </div>
                  </div>
                  <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                    <label
                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled css-1x3fk9d"
                        data-shrink="true"
                        htmlFor=":r0:"
                        id=":r0:-label"
                        
                      >
                        Apellido Paterno
                      </label>
                      <input
                        aria-invalid="false"
                        id="ap_paterno"
                        name="firstName"
                        type="text"
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                        placeholder="Apellido Paterno"
                        defaultValue={cookies.get("ap_paterno")}
                        required
                      />
                      
                    </div>
                  </div>
                  <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                    <label
                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled css-1x3fk9d"
                        data-shrink="true"
                        htmlFor=":r0:"
                        id=":r0:-label"
                        
                      >
                        Apellido Materno
                      </label>
                      <input
                        aria-invalid="false"
                        id="ap_materno"
                        name="lastName"
                        type="text"
                        placeholder="Apellido Materno"
                        defaultValue={cookies.get("ap_materno")}
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                      />
                     
                    </div>
                  </div>
                  <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                    <label
                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled css-1x3fk9d"
                        data-shrink="true"
                        htmlFor=":r0:"
                        id=":r0:-label"
                        
                      >
                        Dni
                      </label>
                      <input
                        aria-invalid="false"
                        id="dni"
                        name="email"
                        type="text"
                        placeholder="DNI"
                        required
                        defaultValue={cookies.get("dni")}
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                      />
                      
                    </div>
                  </div>
                  <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                    <label
                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled css-1x3fk9d"
                        data-shrink="true"
                        htmlFor=":r0:"
                        id=":r0:-label"
                        
                      >
                        Contraseña
                      </label>
                      <input
                        aria-invalid="false"
                        id="contrasena"
                        required
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        defaultValue={cookies.get("contrasena")}
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                      />
                      
                    </div>
                  </div>
                </div>
                <div className="max-width-48">
                  <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                    <label
                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled css-1x3fk9d"
                        data-shrink="true"
                        htmlFor=":r0:"
                        id=":r0:-label"
                        
                      >
                        Dirección
                      </label>
                      <input
                        aria-invalid="false"
                        id="direccion"
                        name="password"
                        required
                        type="text"
                        placeholder="Dirección"
                        defaultValue={cookies.get("direccion")}
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                      />
                      
                    </div>
                  </div>
                  <div className="css-1u0h3mu ">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-yrb7tp">
                    <label
                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled css-1x3fk9d"
                        data-shrink="true"
                        htmlFor=":r0:"
                        id=":r0:-label"
                        
                      >
                        Celular
                      </label>
                      <input
                        aria-invalid="false"
                        id="celular"
                        name="password"
                        type="tel"
                        required
                        className="MuiInputBase-input MuiOutlinedInput-input css-j6vbi8"
                        placeholder="Celular"
                        defaultValue={cookies.get("celular")}
                      />
                      
                    </div>
                  </div>
                  <div className="css-1u0h3mu">
                    <div className="css-yrb7tp">
                    <label
                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled css-1x3fk9d"
                        data-shrink="true"
                        htmlFor=":r0:"
                        id=":r0:-label"
                        
                      >
                        Género
                      </label>
                      <select
                        required
                        className="css-j6vbi8 graycolor"
                        id="genero"
                      >
                        <option value="">Género</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                      </select>
                      
                    </div>
                  </div>
                  <div className="css-1u0h3mu">
                    <div className="css-yrb7tp">
                    <label
                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled css-1x3fk9d"
                        data-shrink="true"
                        htmlFor=":r0:"
                        id=":r0:-label"
                        
                      >
                        Foto
                      </label>
                      <input
                        type="file"
                        className="css-j6vbi8 graycolor"
                        id="foto"
                        name="foto"
                      />
                      
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
                  Editar
                </button>
              </div>
              
            </form>
          </div>
        </main>
      </div>
        </>
    );
  }
}

export default Cuenta;
