import React, { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>Hello how are you</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
