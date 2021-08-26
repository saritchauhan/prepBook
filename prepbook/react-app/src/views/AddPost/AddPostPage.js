import { Button, Paper, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import WelcomePage from "../WelcomePage/WelcomePage";

import useStyles from "./addPostPageStyle";
import * as path from "../../Directions.js";
import { useHistory } from "react-router-dom";


 const AddPost = ({isSignedIn}) => { 

    const classes = useStyles();
    const history = useHistory();

    const [postValues, setPostValues] = useState({username:localStorage.getItem("username"), caption:"", image:""})
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange=(e)=>{
        e.preventDefault();
        setPostValues({
            ...postValues,
            [e.target.name]: e.target.value
        })
    }

    const handlePostSubmit=()=>{
        if(postValues.caption.length === 0){
            setErrorMessage("caption is required")
        }
        else{
            axios.post(path.addPostPath, postValues)
            .then((response)=>{
                // console.log(response);
                history.push("/me")
 
            })
            .catch((error)=>{
                console.log(error);
                // setErrorMessage(`${error.response.data.msg}`)
            })
        }
    }


    return(
        isSignedIn
            ? (
                <div>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography className={classes.title}>
                            Add a post
                        </Typography>

                        {/* <Typography className={classes.subTitle}>
                            let others know 
                        </Typography> */}

                        <form className={classes.form}>
                            
                            <TextField className={classes.formItem}
                            type="text"
                            label="Caption"
                            name="caption"
                            variant="outlined"
                            value={postValues.caption} 
                            onChange={handleChange}
                            multiline
                            helperText={postValues.caption.length === 0 ? "*" : ""}
                            InputProps={{
                                className: classes.textFieldInput3
                            }} ></TextField>
                            
                            

                        </form>

                        <Typography className={classes.errorMessage}>
                            {errorMessage}
                        </Typography>

                        
                        <Button className={classes.buttonMain}
                        variant="contained" color="secondary"
                        onClick={()=>handlePostSubmit()}>
                            post
                        </Button>
                        
                    </Paper>
                </div>
            )
            : <WelcomePage />
    );
}

const mapStateToProps = (state) => {
    return{
        isSignedIn: state.auth.isSignedIn,
        
    }

}


export default connect(mapStateToProps)(AddPost);