import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({

  root:{
    maxWidth:"720px",
    margin:"auto",
    padding:"1rem 2rem 2rem 2rem",
    border:"1px solid",
    borderColor:"#a1a1a1",
    minHeight:"100vh",
    marginTop:"-2px",
    [theme.breakpoints.down('sm')]: {padding:"0rem", borderColor:"#fff", },
      
  },
  
}))

export default useStyles;