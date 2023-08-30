<template>
    <div class="container-fluid">
      <div class="row justify-content-center min-vh-100">
        <div class="col-md-10 card">
          <div class="login_container">
            <div class="login_header">
              &nbsp;
              &nbsp;
            </div>
            <div class="login-form">
              <form @submit.prevent="login">
                <div class="form-group" style="margin-top: 10%">
                  <h4>Username</h4>
                  <div class="form-control-div">
                    <input
                      v-model="username"
                      class="form-control"
                      placeholder="Enter username"
                      autocomplete="on"
                    />
                  </div>
                </div>
                &nbsp;
                <div class="form-group">
                  <h4>Password</h4>
                  <div class="form-control-div">
                    <div class="input-group">
                      <input
                        v-model="password"
                        type="password"
                        class="form-control password-input"
                        placeholder="Enter password"
                        autocomplete="off"
                        id="passwordField"
                      />
                     
                        <button
                          type="button"
                          @click="togglePasswordVisibility"
                          class="btn btn-link password-toggle-button"
                        >
                          <i
                            v-if="showPassword"
                            class="fas fa-eye-slash"
                          ></i>
                          <i v-else class="fas fa-eye"></i>
                        </button>
                      
                    </div>
                  </div>
                </div>
  
                <div class="form-group text-center loginDiv">
                  <button type="submit" class="btn loginButton">Login</button>
                  <button type="button" class="btn loginButton">
                    <i class="fab fa-google"></i> Login with Google 
                  </button>

                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        showPassword: false,
        errors: [],
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      login() {
      },
    },
  };
  </script>
  <style scoped>
  @import '~@fortawesome/fontawesome-free/css/all.css';

  /* the background space with the card in the midle */
    .card {
        background-color: transparent;
        border: none;

        padding: 20px;
    }
    .loginButton {
        background-color: white;
        
        color: #5186cc;
        width: 100%;

        /* separate the buttons */
        margin-bottom: 10px;

        
    }
    .login_container {
        /* background-color: #5186cc; */
        /* add the color with alpha value */
        background-color: rgba(81, 134, 204);
        background-image: url("../assets/Infografia consejos financieros moderno azul.jpg");
        background-repeat: no-repeat;
        background-size: cover;


        
        border-radius: 10px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        padding: 20px;

        /* center the card */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        /* make the card responsive */
        min-height: 400px;
        max-width: 400px;

        /* make the card responsive */
        width: 100%;
        height: 100%;


    }

    /* the header with the logo */
    .login_header {
        text-align: center;
        margin-bottom: 20px;
    }

    /* the form */
    .login-form {
        margin-top: 20px;

        display: flex;
        flex-direction: column;
    }

    /* the form control */
    .form-control-div {
        position: relative;
    }

    /* the form control icon */
    .form-control-div i {
        cursor: pointer;
        color: white;
    }
    .password-toggle-button {
        background-color: blue;
    }

    .password-input {
        padding-right: 60px;
    }

    .loginDiv {
        margin-top: 20px;
    }

    h4 {
        color: white;
        /* and bold */
        font-weight: bold;
    }
   
  </style>
  <style>
    body {
        background-image: url('https://getwallpapers.com/wallpaper/full/a/8/1/66315.jpg');
        background-repeat: no-repeat;


    }
    </style>