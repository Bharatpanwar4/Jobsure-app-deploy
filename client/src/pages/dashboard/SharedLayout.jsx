import { Outlet } from "react-router-dom"
import Wrapper from "../../assets/wrappers/SharedLayout"
import SmallSidebar from "../../components/SmallSidebar"
import Navbar from "../../components/Navbar"
import BigSideBar from "../../components/BigSideBar"
const SharedLayout = () => {
    return (
    <Wrapper>
      <main className="dashboard">
      <SmallSidebar/>
      <BigSideBar/>
        <div >
        <Navbar/>
        <div className="dashboard-page">
        <Outlet/>
        </div>
        </div>
      </main>
      
    </Wrapper>
    )
  }
  
  export default SharedLayout