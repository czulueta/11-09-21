import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Navbar from "./components/Navbar.js"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import Public from "./componenets/Public.js"

export default function App(){
  return(
    <div>
      <Navbar />
      <Switch>
        <Route
          path="/"
          render={() => <Auth />} />
        <Route
          path="/profile"
          render={() => <Profile />} />
        <Route
          path="/public"
          render={() => <Public />} />
      </Switch>
    </div>
  )
}