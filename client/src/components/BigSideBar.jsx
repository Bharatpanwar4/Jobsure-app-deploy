import Wrapper from "../assets/wrappers/BigSidebar"
import { useAppContext } from "../context/appContext";

import Logo from "./Logo.jsx";
import NavLinks from "./NavLinks.jsx";
const BigSideBar = () => {
const {showSidebar} = useAppContext()
  return (
    <Wrapper>
       <div className={showSidebar?'sidebar-container show-sidebar':"sidebar-container"}>
<div className="content">
  <header>
    <Logo/>
  </header>
  <NavLinks
    // toggleSidebar={toggleSidebar} optional
  />
</div>
       </div>


    </Wrapper>
  )
}

export default BigSideBar
