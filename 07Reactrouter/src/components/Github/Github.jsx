import React from 'react'
import { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data,setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/KamalGargSpace')
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setdata(data)
    //         console.log(data)
    //       })
    //   }
    // , [])
  return (
    <div className='text-center bg-gray-400 p-4 m-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git Image" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/KamalGargSpace')
  
  return response.json()
}
