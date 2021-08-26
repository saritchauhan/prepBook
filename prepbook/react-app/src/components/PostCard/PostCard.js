import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./postCardStyle"

 const PostCard = (props) => {

    const classes = useStyles();
    return(
        <div className={classes.root} >
            <img className={classes.profilePhoto}
                    src={props.avatar}
                    alt="profile-photo" />
            <div className={classes.userInfoContainer}>
                
                <Typography className={classes.username}>
                    {props.username}
                </Typography>
                <Typography>
                    {props.caption}
                </Typography>


                
            </div>
            
            <img className={classes.postMedia}
                src={props.postMedia} />

        </div>
    );
}

export default PostCard;