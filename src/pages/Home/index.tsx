import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const LOGIN_STATUS_KEY = "isLoggedIn"

const checkLoginStatus = (): boolean => {
  const status = localStorage.getItem(LOGIN_STATUS_KEY)
  return Boolean(status && status !== "false")
}

export const HomePage = () => {
  const navigate = useNavigate()
  const isLoggedIn = checkLoginStatus()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true })
    }
  }, [isLoggedIn, navigate])

  if (!isLoggedIn) {
    return null
  }

  return <></>
}