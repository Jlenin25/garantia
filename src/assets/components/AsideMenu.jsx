import React from "react";
import "../css/AsideMenuPlantilla.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();
class AsideMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};

  cargoUser;
  Cargo(){
    
  }

  render() {
    return (
      <div className="MuiDrawer-root MuiDrawer-docked css-1tu59u4 " hidden id="AsideMenu" >
        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-1o9ypuc">
          <div className="MuiBox-root css-1g4yje1">
            <div>
              <div className="MuiBox-root css-19kzrtu">
                <a href="http://localhost:3000/">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    xmlns="http://www.w3.org/2000/svg"
                    className="css-2tcqb0"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.6744 4.50247L31.9038 9.66459C32.117 9.78381 32.2944 9.95738 32.4178 10.1674C32.5413 10.3775 32.6064 10.6164 32.6064 10.8597C32.6064 11.1031 32.5413 11.342 32.4178 11.5521C32.2944 11.7621 32.117 11.9357 31.9038 12.0549L22.6745 17.2172C22.0854 17.5467 21.4212 17.7198 20.7456 17.7198C20.0698 17.7198 19.4056 17.5467 18.8166 17.2172L9.5873 12.0549C9.37415 11.9357 9.1967 11.7621 9.0732 11.5521C8.94971 11.342 8.8846 11.1031 8.8846 10.8597C8.8846 10.6164 8.94971 10.3775 9.0732 10.1674C9.1967 9.95738 9.37415 9.78381 9.5873 9.66459L18.8166 4.50247C19.4056 4.17301 20.0698 4 20.7456 4C21.4212 4 22.0854 4.17301 22.6744 4.50247Z"
                      fill="#5048E5"
                    ></path>
                    <path
                      opacity="0.7"
                      d="M22.6244 9.34853L35.8422 16.7415C36.0554 16.8607 36.2328 17.0343 36.3563 17.2443C36.4798 17.4544 36.5449 17.6933 36.5449 17.9366C36.5449 18.18 36.4798 18.419 36.3563 18.629C36.2328 18.8391 36.0554 19.0126 35.8422 19.1319L22.6244 26.5248C22.0355 26.8541 21.3712 27.0272 20.6956 27.0272C20.0199 27.0272 19.3557 26.8541 18.7667 26.5248L5.54893 19.1319C5.33578 19.0126 5.15833 18.8391 5.03483 18.629C4.91133 18.419 4.84623 18.18 4.84623 17.9366C4.84623 17.6933 4.91133 17.4544 5.03483 17.2443C5.15833 17.0343 5.33578 16.8607 5.54893 16.7415L18.7667 9.34853C19.3557 9.01916 20.0199 8.84615 20.6956 8.84615C21.3712 8.84615 22.0355 9.01916 22.6244 9.34853Z"
                      fill="#5048E5"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M22.9257 14.1939L41.2984 24.4703C41.5113 24.5894 41.6884 24.7626 41.8117 24.9724C41.935 25.182 42 25.4206 42 25.6636C42 25.9065 41.935 26.1451 41.8117 26.3548C41.6884 26.5645 41.5113 26.7378 41.2984 26.8568L22.9257 37.1329C22.3377 37.4618 21.6745 37.6346 21 37.6346C20.3254 37.6346 19.6623 37.4618 19.0743 37.1329L0.701542 26.8568C0.488743 26.7378 0.311581 26.5645 0.188286 26.3548C0.0649948 26.1451 0 25.9065 0 25.6636C0 25.4206 0.0649948 25.182 0.188286 24.9724C0.311581 24.7626 0.488743 24.5894 0.701542 24.4703L19.0743 14.1939C19.6623 13.8651 20.3254 13.6923 21 13.6923C21.6745 13.6923 22.3377 13.8651 22.9257 14.1939Z"
                      fill="#5048E5"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="MuiBox-root css-gajhq5">
                <div className="MuiBox-root css-1ptzaww">
                  <div>
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-rl5iwp">
                      {cookies.get('nombre')+' '+cookies.get('ap_paterno')}
                    </h6>
                    <p className="MuiTypography-root MuiTypography-body2 css-upja9j">
                      {cookies.get('rol')}
                    </p>
                  </div>
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1kpphc1"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="ChartSquareBarIcon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 8 14"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 0C4.26519 5.66374e-05 4.51951 0.105451 4.707 0.293L7.707 3.293C7.88916 3.4816 7.98995 3.7342 7.98767 3.9964C7.9854 4.2586 7.88023 4.50941 7.69482 4.69482C7.50941 4.88023 7.2586 4.9854 6.9964 4.98767C6.7342 4.98995 6.4816 4.88916 6.293 4.707L4 2.414L1.707 4.707C1.5184 4.88916 1.2658 4.98995 1.0036 4.98767C0.741402 4.9854 0.49059 4.88023 0.305182 4.69482C0.119773 4.50941 0.0146042 4.2586 0.0123258 3.9964C0.0100473 3.7342 0.110842 3.4816 0.293 3.293L3.293 0.293C3.48049 0.105451 3.73481 5.66374e-05 4 0ZM0.293 9.293C0.480528 9.10553 0.734836 9.00021 1 9.00021C1.26516 9.00021 1.51947 9.10553 1.707 9.293L4 11.586L6.293 9.293C6.4816 9.11084 6.7342 9.01005 6.9964 9.01233C7.2586 9.0146 7.50941 9.11977 7.69482 9.30518C7.88023 9.49059 7.9854 9.7414 7.98767 10.0036C7.98995 10.2658 7.88916 10.5184 7.707 10.707L4.707 13.707C4.51947 13.8945 4.26516 13.9998 4 13.9998C3.73484 13.9998 3.48053 13.8945 3.293 13.707L0.293 10.707C0.105529 10.5195 0.000213623 10.2652 0.000213623 10C0.000213623 9.73484 0.105529 9.48053 0.293 9.293Z"
                      ></path>
                    </svg>
                  </svg>
                </div>
              </div>
            </div>
            <hr className="MuiDivider-root MuiDivider-fullWidth css-d5e998" />
            <div className="MuiBox-root css-i9gxme">
              <li className="MuiListItem-root MuiListItem-padding css-19wsrat">
                <a
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation css-129bs90"
                  tabIndex="0"
                  href="http://localhost:3000/"
                >
                  <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      
                      data-testid="ChartBarIcon"
                    >
                      <svg
                        viewBox="0 0 20 18"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.399902 10.2C0.399902 9.88175 0.52633 9.57652 0.751374 9.35148C0.976418 9.12644 1.28164 9.00001 1.5999 9.00001H3.9999C4.31816 9.00001 4.62339 9.12644 4.84843 9.35148C5.07347 9.57652 5.1999 9.88175 5.1999 10.2V16.2C5.1999 16.5183 5.07347 16.8235 4.84843 17.0485C4.62339 17.2736 4.31816 17.4 3.9999 17.4H1.5999C1.28164 17.4 0.976418 17.2736 0.751374 17.0485C0.52633 16.8235 0.399902 16.5183 0.399902 16.2V10.2ZM7.5999 5.40001C7.5999 5.08175 7.72633 4.77652 7.95137 4.55148C8.17642 4.32643 8.48164 4.20001 8.7999 4.20001H11.1999C11.5182 4.20001 11.8234 4.32643 12.0484 4.55148C12.2735 4.77652 12.3999 5.08175 12.3999 5.40001V16.2C12.3999 16.5183 12.2735 16.8235 12.0484 17.0485C11.8234 17.2736 11.5182 17.4 11.1999 17.4H8.7999C8.48164 17.4 8.17642 17.2736 7.95137 17.0485C7.72633 16.8235 7.5999 16.5183 7.5999 16.2V5.40001ZM14.7999 1.80001C14.7999 1.48175 14.9263 1.17652 15.1514 0.951478C15.3764 0.726434 15.6816 0.600006 15.9999 0.600006H18.3999C18.7182 0.600006 19.0234 0.726434 19.2484 0.951478C19.4735 1.17652 19.5999 1.48175 19.5999 1.80001V16.2C19.5999 16.5183 19.4735 16.8235 19.2484 17.0485C19.0234 17.2736 18.7182 17.4 18.3999 17.4H15.9999C15.6816 17.4 15.3764 17.2736 15.1514 17.0485C14.9263 16.8235 14.7999 16.5183 14.7999 16.2V1.80001Z"></path>
                      </svg>
                    </svg>
                  </span>
                  <div className="MuiBox-root css-i9gxme">Dashboard</div>
                </a>
              </li>
              <li className="MuiListItem-root MuiListItem-padding css-19wsrat">
                <a
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation css-1uk9c8u"
                  tabIndex="0"
                  href="http://localhost:3000/customers"
                >
                  <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="UsersIcon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                      </svg>
                    </svg>
                  </span>
                  <div className="MuiBox-root css-i9gxme">Customers</div>
                </a>
              </li>
              <li className="MuiListItem-root MuiListItem-padding css-19wsrat">
                <a
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation css-1uk9c8u"
                  tabIndex="0"
                  href="http://localhost:3000/products"
                >
                  <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ShoppingBagIcon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </svg>
                  </span>
                  <div className="MuiBox-root css-i9gxme">Products</div>
                </a>
              </li>
              <li className="MuiListItem-root MuiListItem-padding css-19wsrat">
                <a
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation css-1uk9c8u"
                  tabIndex="0"
                  href="http://localhost:3000/account"
                >
                  <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="UserIcon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </svg>
                  </span>
                  <div className="MuiBox-root css-i9gxme">Account</div>
                </a>
              </li>
              <li className="MuiListItem-root MuiListItem-padding css-19wsrat">
                <a
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation css-1uk9c8u"
                  tabIndex="0"
                  href="http://localhost:3000/settings"
                >
                  <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="CogIcon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </svg>
                  </span>
                  <div className="MuiBox-root css-i9gxme">Settings</div>
                </a>
              </li>
              <li className="MuiListItem-root MuiListItem-padding css-19wsrat">
                <a
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation css-1uk9c8u"
                  tabIndex="0"
                  href="http://localhost:3000/login"
                >
                  <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="LockIcon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </svg>
                  </span>
                  <div className="MuiBox-root css-i9gxme">Login</div>
                </a>
              </li>
              <li className="MuiListItem-root MuiListItem-padding css-19wsrat">
                <a
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation css-1uk9c8u"
                  tabIndex="0"
                  href="http://localhost:3000/register"
                >
                  <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="UserAddIcon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                      </svg>
                    </svg>
                  </span>
                  <div className="MuiBox-root css-i9gxme">Register</div>
                </a>
              </li>
              <li className="MuiListItem-root MuiListItem-padding css-19wsrat">
                <a
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation css-1uk9c8u"
                  tabIndex="0"
                  href="http://localhost:3000/404"
                >
                  <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="XCircleIcon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </svg>
                  </span>
                  <div className="MuiBox-root css-i9gxme">Error</div>
                </a>
              </li>
            </div>
            <hr className="MuiDivider-root MuiDivider-fullWidth css-1xqczjx" />
          </div>
        </div>
      </div>
    );
  }
}
export default AsideMenu;
