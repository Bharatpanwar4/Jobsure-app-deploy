import React from "react";
import { Link ,Navigate} from "react-router-dom";
import mainone from "../assets/images/mainone.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components/Logo";
import { useAppContext } from "../context/appContext";
const Landing = () => {
  const {user}=useAppContext()


  return (
    <React.Fragment>
    {user && <Navigate to='/'/>}
    <Wrapper>
      <nav>
      <Logo/>
      </nav>
      <div className="container page">
      {/* info */}
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
          JobSure helps companies of all sizes hire at scale. Start today by
requesting a demo or posting a job for free to discover how JobSure
can help you find and hire great people.
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        {/* image */}
        <img src={mainone} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
    </React.Fragment>
  );
};




export default Landing;
