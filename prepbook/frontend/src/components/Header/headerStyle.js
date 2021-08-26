import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({

  root:{
    // [theme.breakpoints.down('sm')]: {height:"60vh"},
    height:"4rem",
      
  },

  appBar:{
    backgroundColor:"#ffffff",
    background:"#ffffff",
    position:"fixed",
    zIndex:"10",
    width:"100%",
    height:"4rem",
    // [theme.breakpoints.down('md')]: {height:"3.5rem"},
  },

  toolbar:{
    height:"4rem",
    width:"90%",
    margin:"auto",
    backgroundColor:"ffffff",
    display:"flex",
    alignItems:"center",
    [theme.breakpoints.down('md')]: {width:"100%", },

  },

  firmLogo:{
    height:"3rem",

  },

  searchBar:{
    border:"1px solid",
    borderColor:"#fff9ec",
    borderRadius:"1rem",
    height:"3rem",
    // width:"100%",
    padding:"1rem",
    margin:"0 1rem 0 1rem 0",
    backgroundColor:"#f1f1ff",
    flex:1,
    margin:"0 5rem 0 5rem",
    // color:"white",
    [theme.breakpoints.down('md')]: { margin:"0",},
 
  },

  profilePhoto:{
    height:"2.5rem",
    
  }
  
}))

export default useStyles;