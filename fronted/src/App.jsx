/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
import { SignUpPage } from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import {Loader} from "lucide-react"
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";
const App = () => {
  const {authUser, checkAuth, isCheckingAuth} =  useAuthStore();
  const {theme} = useThemeStore();
  useEffect(() => {
    checkAuth()
  }, [checkAuth]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    console.log(theme)
  }, [theme]);
  if(isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin"/>
    </div>
  )


  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={authUser ? <HomePage/> : <Navigate to="/login"/>}/>
        <Route path="/signup" element={!authUser ? <SignUpPage/> : <Navigate to="/login"/>}/>
        <Route path="/login" element={!authUser ? <LoginPage/> : <Navigate to="/login"/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/profile" element={authUser ? <ProfilePage/> : <Navigate to="/login"/> }/>
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
