import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({

  root:{
    // [theme.breakpoints.down('sm')]: {height:"60vh"},
    display:"flex",
    backgroundColor:"#fff",
    marginTop:"1rem",
    padding:"0.4rem"
      
  },

  profilePhoto:{
    width:"4rem",
    [theme.breakpoints.down('sm')]: {width:"3rem",},

  },

  username:{
    fontSize:"2rem",
    fontWeight:"450",
    [theme.breakpoints.down('sm')]: {fontSize:"1.4rem",},

  }
  
}))

export default useStyles;