import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";


import useStyles from "./feedPageStyle"
import * as path from "../../Directions.js"
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard";


 const FeedPage = () => {

    const classes = useStyles();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get(path.getAllPostsPath)
        .then((response)=>{
            console.log(response);
            setData(response.data)
            setLoading(false)
            
        })
        .catch((error)=>{
            console.log(error.response);
            // setErrorMessage(`${error.response.data.msg}`)
        })
    }, [])

    if ( loading ){
        return(
            <>
                <Typography>
                    Loading...
                </Typography>
            </>
        )
    }


    return(
        <div className={classes.root} >
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

        </div>
    );
}

export default FeedPage;