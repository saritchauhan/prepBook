import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({

  root:{
    maxWidth:"70%",
    margin:"auto",
    [theme.breakpoints.down('sm')]: {maxWidth:"100%"},
      
  },

  coverPhoto:{
    maxWidth:"100%"
  },

  avatarContainer:{
    width:"100%",
    display:"flex"
  },

  profilePhoto:{
    width:"20%",
    marginTop:"-10vw",
    borderRadius:"50rem",
    backgroundColor:"red",
    margin:"auto",
  
  },
  
  username:{
    textAlign:"center",
    fontSize:"4rem",
    [theme.breakpoints.down('sm')]: {fontSize:"2rem"},

  },

  bio:{
    textAlign:"center",
    fontSize:"1.1rem",
    color:"#999999"
  },

  createPostContainer:{
    width:"100%",
    display:"flex",
  },

  addPaper:{
    width:"50%",
    marginTop:"2rem",
    padding:"1rem",
    margin:"auto",
    backgroundColor:"#fff",
    textAlign:"center",
    [theme.breakpoints.down('sm')]: {width:"90%"},


  },

  paperHeading:{
    // textAlign:"center",
    fontSize:"1.5rem"
  },

  subHeading:{
    textAlign:"center",
    color:"#115293",
    marginTop:"1rem"
  },

  postContainer:{
    width:"60%",
    margin:"auto",
    [theme.breakpoints.down('sm')]: {width:"100%"},

  },
  
}))

export default useStyles;