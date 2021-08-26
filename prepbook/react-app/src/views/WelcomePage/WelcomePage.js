import { Button, FormControl, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import * as Icons from "@material-ui/icons";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";


import * as path from "../../Directions.js"
import useStyles from "./welcomePageStyle"
import { signIn } from "../../redux/authorization/authActions"



 const WelcomePage = ({signIn}) => {

    const classes = useStyles();
    const history = useHistory();

    const someToken = "someToken123"
    
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const handleUsernameChange=(e)=>{
        e.preventDefault();
        setUsername(e.target.value)
    }

    const handleKeyDown=(e)=>{
        // e.preventDefault();
        if(e.key === "Enter"){
            handleSignIn()
        }
    }

    const handleSignIn=()=>{
        if(username.length===0){
            setErrorMessage("username is required")
        }
        else if(username.length < 3){
            setErrorMessage("username is too short")
        }
        else{
            axios.post(path.signInPath, {username: username})
            .then((response)=>{
                console.log(response);
                localStorage.setItem("username", username);
                localStorage.setItem("token", someToken);
                history.push("/me")
                signIn()
            })
            .catch((error)=>{
                console.log(error.response);
                // setErrorMessage(`${error.response.data.msg}`)
            })
        }
    }


    return(
        <div className={classes.root} >
            <Grid container >
                <Grid item md={12} lg={6} >
                    <div className={classes.titleContainer} >
                    <Typography className={classes.title}>
                        PrepSeed
                    </Typography>
                    <Typography className={classes.valueText}>
                        Plant a seed towards your future
                    </Typography>
                    </div>
                    
                </Grid>
                <Grid item md={12} lg={6} >
                    <Paper className={classes.paper} elevation={3}>
                        <Typography className={classes.formHeading}>
                            Sign In
                        </Typography>

                        <Typography className={classes.formSubHeading}>
                            Enter your username
                        </Typography>

                        <div className={classes.form}>

                            <FormControl className={classes.formItem}>
                                <InputLabel> Enter your username</InputLabel>
                                <Input
                                variant="outlined"
                                type = "text"
                                name="username"
                                onChange={handleUsernameChange}
                                onKeyDown={(e)=>handleKeyDown(e)}
                                value={username}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <Icons.Person />
                                        </IconButton>
                                    </InputAdornment>
                                } /> 
                                <FormHelperText className={classes.helperText}>
                                    {username.length === 0 ? "*" : "" }
                                </FormHelperText>     
                            </FormControl>

                            

                            <Typography className={classes.errorMessage}>
                                {errorMessage}
                            </Typography>

                            <Button className={classes.signInButton}
                            variant="contained"
                            color="primary"
                            onClick={()=>handleSignIn()}>
                                Sign In
                            </Button>
                            
                        </div>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return{
        signIn: () => dispatch(signIn()),
    }
}

export default connect(null, mapDispatchToProps)(WelcomePage);