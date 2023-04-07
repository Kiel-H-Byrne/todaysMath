import Router from "next/router"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  initializeAuth,
  onAuthStateChanged,
  User,
} from "firebase/auth"

import { useEffect, useState } from "react"
import { todaysMathApp } from "./firebase"

import { disableNetwork } from "firebase/firestore"

import { ROUTES } from "./../routes"
import { auth, fsdb } from "./firebase"

export const doCreateUserWithEmailAndPassword = (
  email: string,
  password: string,
) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User created successfully
      const user = userCredential.user
      console.log("User created:", user)
      return user
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error creating user:", error)
      throw error
    })
}

// Function to sign in user with email and password
export const doSignInWithEmailAndPassword = (
  email: string,
  password: string,
) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user
      console.log("User signed in:", user)
      return user
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error signing in:", error)
      throw error
    })
}

// export const doSignInWithPhone = (phoneNumber) =>
//   auth.signInWithPhoneNumber(phoneNumber)

// Sign out
export const doLogOut = (dispatch: ({}) => void) => {
  disableNetwork(fsdb)

  auth.signOut()
  dispatch({
    type: "reset", //ACTIONS.RESET_APP,
  })
  dispatch({
    type: "reset_users", //ACTIONS.RESET_USERS,
  })
  dispatch({
    type: "reset_forms", //ACTIONS.RESET_FORMS,
  })
  Router.push(ROUTES.LANDING)
}

// Password Reset
// export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email)

// Password Change
// export const doPasswordUpdate = (password) =>
//   auth.currentUser.updatePassword(password)

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const auth = initializeAuth(todaysMathApp)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return { user, isLoading }
}
