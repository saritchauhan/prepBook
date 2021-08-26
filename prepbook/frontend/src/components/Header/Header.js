import { Button, InputBase, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../../redux/authorization/authActions";


import useStyles from "./headerStyle"

 const Header = ({isSignedIn, signOut}) => {

    const classes = useStyles();
    const history = useHistory();

    const theme = useTheme();
    const largeScreen = useMediaQuery(theme.breakpoints.up("lg"))
    const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const username = localStorage.getItem("username") || null

    const [search, setSearch] = useState("")

    const handleChange=(e)=>{
        setSearch(e.target.value)

    }

    const handleSignOut=()=>{
        signOut();
        localStorage.removeItem("token");
        localStorage.removeItem("username")
        history.push("/")
    }

    const handleSignIn=()=>{
        history.push("/")
        alert("please enter your username below")
        
    }

    const handleKeyDown=(e)=>{
        // e.preventDefault();
        if(e.key === "Enter"){
            history.push(`/profile/${search}`)
        }
    }

    return(
        <div className={classes.root} >
            <div className={classes.appBar}>
                <div className={classes.toolbar}>

                    {
                        largeScreen &&
                        <Link to="/">
                            <img className={classes.firmLogo} 
                            src="https://static.prepseed.com/brand/prepseed/prepseed-transparent-landscape.svg"
                            alt="firm-logo" />
                        </Link>
                        
                    }

                    {
                        smallScreen &&
                        <Link to="/">
                            <img className={classes.firmLogo} 
                            src="https://static.prepseed.com/brand/prepseed/Prepseed%20Logo_Brandmark-500.png"
                            alt="firm-logo" />

                        </Link>
                        
                    }

  
                    <InputBase className={classes.searchBar}
                    placeholder="Search"
                    onChange={handleChange}
                    onKeyDown={(e)=>handleKeyDown(e)} > 
                    </InputBase>
                    
                    {
                        isSignedIn 
                            ? (
                                <Link to="/me">
                                    <img className={classes.profilePhoto} 
                                    src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`}
                                    alt="profile-photo" />
                                </Link>
                            )
                            : null
                    }
                    
                    
                    {
                        isSignedIn 
                        ? <Button className={classes.headerButton}
                            // variant="contained"
                            color="primary"
                            onClick={()=>handleSignOut()}>
                            Sign Out
                        </Button> 
                        : <Button className={classes.headerButton}
                            variant="contained"
                            color="primary"
                            onClick={()=>handleSignIn()}>
                            Sign In
                        </Button>
                    }
                        
                   
                    
                </div>
            </div>
            

        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut()),
    }
}


const mapStateToProps = (state) => {
    return{
        isSignedIn: state.auth.isSignedIn,
        
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(Header);