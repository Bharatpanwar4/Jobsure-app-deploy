import { useEffect } from 'react'
import {useAppContext} from '../../context/appContext.js'
import Loading from '../../components/Loading.jsx'
import StatsContainer from '../../components/StatsContainer'
import ChartsContainer from '../../components/ChartsContainer'
const Stats = () => {

  const {showStats,isLoading,monthlyApplications} = useAppContext()
  useEffect(()=>{
    showStats()
    // eslint-disable-next-line
  },[])
  if(isLoading){
    return <Loading center/>
  }
    return (
     <>
 <StatsContainer/>
      {monthlyApplications.length>0 && <ChartsContainer/>}
     </>
     
     
    )
  }
  
  export default Stats