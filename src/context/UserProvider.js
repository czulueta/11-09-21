import React, { useState } from "react" 
import axios from "axios" 

export const UserContext = React.createContext()
const initState = { user:{}, token: "", todos: []}
const [userState, setUserState] = useState(initState)

function signup(credentials){
  axios.get("/auth/signup", credentials)
    .then(res => {
      const { user, token } = res.data
      localStorage.setItem("token")
      localStorage.setItem("user", JSON.stringify(user))
      setUserState(prevUserState => ({
        ...prevUserState,
        user,
        token
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))
}
function login(credentials){
  axios.get("/auth/login", credentials)
    .then(res => {
      const { user, token } = res.data
      localStorage.setItem("token")
      localStorage.setItem("user", JSON.stringify(user))
      setUserState(prevUserState => ({
        ...prevUserState,
        user,
        token
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))
}
function logout(){
  localStorage.remove("token")
  localStorage.remove("user")
  setUserState({
    user:{},
    token: "",
    todos: []
  })
}

export default function UserProvider(){
  return(
    <UserContext.Provider value={{
      ...userState,
      signup,
      login,
      logout
    }}>
      {props.children}
    </UserContext.Provider>
  )
}