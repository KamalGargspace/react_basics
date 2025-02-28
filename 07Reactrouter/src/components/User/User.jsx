import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
  return (
    <div className='bg-gray-400 p-3 text-center'>
      User: {userid}
    </div>
  )
}

export default User
