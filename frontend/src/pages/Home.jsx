import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const {userData, serverUrl, setUserData}=useContext(userDataContext)
  const navigate=useNavigate()
  const handleLOgOut=async()=>{
    try {
      const result=await axios.get(`${serverUrl}/api/auth/logout`, {withCredentials:true})
      setUserData(null)
      navigate("/signin")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-black to-[#030353] flex justify-center items-center flex-col gap-[15px]'>

       <button className='min-w-[150px] h-[60px] mt-[30px] bg-white absolute top-[20px] right-[20px] rounded-full text-black font-semibold text-[19px] cursor-pointer' onClick={handleLOgOut}>Log Out</button>

        <button className='min-w-[150px] h-[60px] mt-[30px] bg-white rounded-full text-black font-semibold absolute top-[100px] right-[20px] text-[19px] cursor-pointer px-[20px] py-[10px]' onClick={()=>navigate("/customize")}>Customize</button>

      <div className='w-[300px] h-[400px] flex justify-center items-center overflow-hidden rounded-[40px] shadow-lg'>
        <img src={userData?.assistantImage} alt="" className='h-full object-cover'/>
      </div>
      <h1 className='text-white'>I'm {userData?.assistantName}</h1>
    </div>
  )
}

export default Home
