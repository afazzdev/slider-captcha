const lightTheme = `@font-face {
  font-family: "Roboto";
  src: url("../../../fonts/roboto/Roboto-Regular.woff2") format("woff2"), url("../../../fonts/roboto/Roboto-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Roboto-Regular";
  src: url("../../../fonts/roboto/Roboto-Regular.woff2") format("woff2"), url("../../../fonts/roboto/Roboto-Regular.woff") format("woff");
}
.scaptcha-anchor-container {
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #f8f8f8;
  width: 100%;
  height: 50px;
  padding: 13px;
  max-width: 400px;
}

.scaptcha-anchor-checkbox {
  display: inline-block;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  height: 24px;
  width: 24px;
  padding-left: 3.5px;
  cursor: pointer;
  background-color: #fff;
}

.scaptcha-anchor-label {
  font-size: 13px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  display: inline-block;
  color: #424242;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  vertical-align: middle;
  line-height: 6px;
  height: 100%;
  margin-left: 13px;
}

.scaptcha-card-background {
  width: 250px;
  height: 150px;
}

.scaptcha-card-loading {
  margin: 15px;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 250px;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.scaptcha-card-container {
  position: absolute;
  padding: 15px 15px 0px 15px;
  min-width: 280px;
  min-height: 213px;
  background-color: #f1f1f1;
  box-shadow: 0px -1px 0px -2px rgba(0, 0, 0, 0.2), 0px 2px 9px 0px rgba(0, 0, 0, 0.14), 0px 5px 9px 0px rgba(0, 0, 0, 0.15);
  margin-top: -260px;
}

@media only screen and (max-width: 400px) {
  .scaptcha-card-container {
    margin-left: -13px;
  }
}
.scaptcha-card-slider-puzzle {
  margin-left: 15px;
  margin-top: 15px;
  position: absolute;
  left: 5px;
  top: 0;
}

.scaptcha-card-slider-control {
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  width: 30px;
  height: 30px;
  background-color: #fafafa;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1px;
}

.scaptcha-card-slider-control:hover {
  background-color: #0889e4;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.scaptcha-card-slider-container {
  margin-top: 7px;
  position: relative;
  height: 44px;
}

.scaptcha-card-slider-track {
  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 3px;
  left: 0;
  width: 250px;
  height: 24px;
  background-color: #d9d9d9;
  border-radius: 12px;
}

.scaptcha-card-slider-mask {
  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 3px;
  left: 0;
  width: 0;
  height: 24px;
  background-color: #3caeff;
  border-radius: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.scaptcha-card-slider-label {
  color: #716e6e;
  padding-left: 20px;
  position: absolute;
  top: 3px;
  left: 0;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 13px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1;
}

.scaptcha-hidden {
  background: none;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: fixed;
}

/*# sourceMappingURL=light.css.map */
`; export default lightTheme;