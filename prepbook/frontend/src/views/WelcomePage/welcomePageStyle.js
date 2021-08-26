import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({

  root:{
    width:"50%",
    minHeight:"60vh",
    margin:"auto",
    padding:"3rem",
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    [theme.breakpoints.down('sm')]: {width:"100%", padding:"2rem 1rem 2rem 1rem"}
      
  },

  titleContainer:{
    // backgroundColor:"#f1f1ff",
    height:"100%",
    display:"flex",
    flexDirection:"column",
    // alignItems:"center",
    justifyContent:"center",
    padding:"0",
    [theme.breakpoints.down('sm')]: {padding:"1rem"}


  },

  title:{
    fontSize:"3rem",
    color:"#115293"
  },

  valueText:{
    fontSize:"2rem",

  },

  paper:{
    maxWidth:"550px",
    margin:"auto",
    padding:"3rem 0 3rem 0",
    display:"flex",
    flexDirection:"column",
    borderRadius:"1rem",
    textAlign:"center",
    // [theme.breakpoints.down('sm')]: {}

  },

  form:{
    textAlign:"center",
    display:"flex",
    flexDirection:"column"  
},

formHeading:{
  fontSize:"1.5rem",
  fontWeight:"400"
},

formSubHeading:{
  color:"#919191"
},


errorMessage:{
  textAlign:"center",
  color:"red",
  // whiteSpace:"pre-wrap",
  padding:"0 1rem 0 1rem"
},

  helperText:{
    color:"red"
},

  formItem:{
    margin:"1.5rem"
},

signInButton:{
  width:"50%",
  margin:"auto"
},
  
}))

export default useStyles;