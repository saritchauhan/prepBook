import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({

  root:{
    backgroundColor:"#f6f6f6",
    minHeight:"90vh",
    padding:"4rem",
    [theme.breakpoints.down('sm')]: {padding:"1rem"},

  },

  paper:{ 
      maxWidth:"500px",
      margin:"auto",
      marginTop:"3rem",
      padding:"3rem 0 3rem 0",
      display:"flex",
      flexDirection:"column",
      borderRadius:"1rem",
      // display:"block",
      // alignContent:"center",
      
  },

  title:{
      textAlign:"center",
      fontSize:"2rem"

  },

  form:{
      textAlign:"center",
      display:"flex",
      flexDirection:"column"  
  },

  formItem:{
      margin:"1.5rem",
      
  },

  textFieldInput3:{
    paddingBottom:"5rem"  },

  errorMessage:{
      textAlign:"center",
      color:"red",
      // whiteSpace:"pre-wrap",
      padding:"0 1rem 0 1rem"
  },

  buttonMain:{
      borderRadius:"3rem",
      minWidth:"50%",
      margin:"1rem auto",
      
  },
  subTitle:{
      textAlign:"center",
      marginBottom:"3rem",
      maxWidth:"300px",
      margin:'auto'
  },

  buttonSwitch:{
      // textTransform:"none",
      // fontSize:"1rem"
      color:"blue"

  },

  helperText:{
      color:"red"
  },
  
}))

export default useStyles;