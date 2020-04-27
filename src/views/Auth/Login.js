import React, {Component} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import {Auth} from 'aws-amplify';

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default class Login extends Component {

  state = {
    password: '',
    email: '',
    signedIn: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {signedIn, password, email} = this.state

      Auth.sigIn({
        email: email,
        password: password,
        /* attributes: {
          email: email,
          phone_number: phone_number
        } */

      })
      .then(() => console.log('Logeado'))
      .catch(err => console.log(err));

      Auth.confirmSignIn(email)
      .then(() => console.log("Hecho"))
      .catch(err => console.log(err));

      this.setState({
        signIn: true
      });
    
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  }
  
  render () {
    //const classes = useStyles();
    const { ...rest } = this.props;
    const {signedUp} = this.state;

    if (signedUp) {
      return (
        <div>
          
        <h1>Logeado</h1>
        </div>
      );
    }else {
        return (
          <div>
            
            <div
              
              style={{
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center"
              }}
            >
              <div /* className={classes.container} */>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={4}>
                    <Card /* className={classes[cardAnimaton]} */>
                      <form onSubmit={this.handleSubmit}/* className={classes.form} */>
                        <CardHeader color="primary" >
                          <h4>Registrarse</h4>
                          <div /* className={classes.socialLine} */>
                            <Button
                              justIcon
                              href="#pablo"
                              target="_blank"
                              color="transparent"
                              onClick={e => e.preventDefault()}
                            >
                              <i className={"fab fa-twitter"} />
                            </Button>
                            <Button
                              justIcon
                              href="#pablo"
                              target="_blank"
                              color="transparent"
                              onClick={e => e.preventDefault()}
                            >
                              <i className={"fab fa-facebook"} />
                            </Button>
                            <Button
                              justIcon
                              href="#pablo"
                              target="_blank"
                              color="transparent"
                              onClick={e => e.preventDefault()}
                            >
                              <i className={"fab fa-google-plus-g"} />
                            </Button>
                          </div>
                        </CardHeader>
                        <p /* className= *//* classes.divider */>Registrar Cuenta</p>
                        <CardBody>
                          <CustomInput
                            labelText="Email..."
                            onChange={this.handleChange}
                            id="email"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "email",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Email /* className=  classes.inputIconsColor *//>
                                </InputAdornment>
                              )
                            }}
                          />
                          <CustomInput
                            labelText="Contraseña"
                            id="password"
                            onChange={this.handleChange}
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "password",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Icon /* className=  classes.inputIconsColor */>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                              ),
                              autoComplete: "off"
                            }}
                          />
                        </CardBody>
                        <CardFooter /* className= classes.cardFooter */>
                          <Button simple color="primary" size="lg">
                            INGRESAR
                          </Button>
                        </CardFooter>
                      </form>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
              {/* <Footer whiteFont /> */}
            </div>
          </div>
        );
      }  
  }
}
