import React from "react";
import { connect } from "react-redux";
import FeedPage from "../FeedPage/FeedPage";
import WelcomePage from "../WelcomePage/WelcomePage";




 const HomePage = ({isSignedIn}) => {

    
    return(
        isSignedIn 
            ? <FeedPage />
            : <WelcomePage />
    );
}

const mapStateToProps = (state) => {
    return{
        isSignedIn: state.auth.isSignedIn,
        
    }

}

export default connect(mapStateToProps)(HomePage);