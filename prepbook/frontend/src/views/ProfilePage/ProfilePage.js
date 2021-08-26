import { Button, CardActionArea, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';

import * as path from "../../Directions.js"
import useStyles from "./profilePageStyle"
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard.js";

 const ProfilePage = () => {

    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const activeUser = localStorage.getItem("username")
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isUser, setIsUser] = useState(true)

    const myProfile = id ? false : true
    const username = myProfile ? activeUser : id

    const handleAddClick=()=>{
        history.push("/add-post")
    }

    useEffect(()=>{
        axios.get(`${path.getUserPostsPath}/${username}`)
        .then((response)=>{
            console.log(response);
            setData(response.data)
            setLoading(false)
            
        })
        .catch((error)=>{
            console.log(error.response);
            // setErrorMessage(`${error.response.data.msg}`)
        })

        axios.get(`${path.getUserPath}/${username}`)
        .then((response)=>{
            console.log(response);
            if(response.data.length !== 0){
                setIsUser(true)
            }
            else{
                setIsUser(false)
            }
            
            
        })
        .catch((error)=>{
            console.log(error);
            // setErrorMessage(`${error.response.data.msg}`)
        })

        
    }, [id])   

    if(!isUser){
        return(
            <div>
                <Typography >
                    no user found
                </Typography>
            </div>
        )
    }

    return(
        <div className={classes.root} >

            <img className={classes.coverPhoto}
            src="https://picsum.photos/1980/500"
            alt="cover-image" />

            <div className={classes.avatarContainer}>
            <img className={classes.profilePhoto}
            src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`}
            alt="profile-photo" />
            </div>

            <Typography className={classes.username}>
                {username}
            </Typography>

            <Typography className={classes.bio}>
                User bio 
            </Typography>

            <div style={{height:"1px", width:"100%", backgroundColor:"#d1d1d1"}}></div>

            {
                myProfile 
                    ? (<div className={classes.createPostContainer}>
                        <CardActionArea className={classes.addPaper}
                        onClick={()=>handleAddClick()}>
                        
                            <Typography className={classes.paperHeading}>
                                What's on your mind?
                            </Typography>
                            <Button>
                            <AddCircleIcon /> add a post
                            </Button>
                        </CardActionArea>
                    </div>)
                    : null
            }

            

            

            <Typography className={classes.subHeading}>
                previously added posts
            </Typography>

            <div style={{width:"50%", height:"1px", backgroundColor:"#d1d1d1", margin:"auto"}}></div>

            {
                loading
                    ? (<Typography>loading...</Typography>)
                    : (<div className={classes.postContainer}>
                        {data.map((item, index)=>{
                            return(
                                <PostCard
                                    key={index}
                                    avatar={`https://avatars.dicebear.com/api/avataaars/${item.username}.svg`}
                                    username={item.username}
                                    caption={item.caption}
                                    image={item.image} />
                            )
                        })}
                    </div>)
            }

        </div>
    );
}

export default ProfilePage;