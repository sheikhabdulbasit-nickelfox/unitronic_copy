"use client"
import { useState } from "react"
import { useLoginModel } from "../../models/auth/login.model"
import { useRouter } from "next/navigation"

export const useLoginController = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showLoader, setShowLoader] = useState(false)

  const navigate = useRouter()
  const model = useLoginModel()

  const togglePasswordVisiblity = () => {
    setShowPassword((prev) => !prev)
  }

  const handleLogin = async (values) => {
    setShowLoader(true)
    const loginStatus = await model.loginByEmail(values)
    if (loginStatus) {
      navigate.replace("/")
    }
    setShowLoader(false)
  }

  const navigateToForgotPassword = () => {
    navigate.push("/auth/forgot-password")
  }

  const navigateToSignUp = () => {
    navigate.push("/auth/signup")
  }

  return {
    showPassword,
    showLoader,
    togglePasswordVisiblity,
    handleLogin,
    navigateToForgotPassword,
    navigateToSignUp
  }
}
