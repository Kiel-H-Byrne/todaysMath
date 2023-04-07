import Router from "next/router"
import { auth, fsdb } from "./firebase"
import { disableNetwork } from "firebase/firestore"

import { ROUTES } from "./../routes"

// export const doCreateUserWithEmailAndPassword = (email, password) =>
//   auth.createUserWithEmailAndPassword(email, password)

// // Sign In
// export const doSignInWithEmailAndPassword = (email, password) =>
//   auth.signInWithEmailAndPassword(email, password)

// export const doSignInWithPhone = (phoneNumber) =>
//   auth.signInWithPhoneNumber(phoneNumber)

// Sign out
export const doLogOut = (dispatch: ({ type: string }) => void) => {
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
