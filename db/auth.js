// import Router from 'next/router';
// import { auth, rtdb } from './firebase';

// import * as ACTIONS from './../Actions/actionConstants';
// import * as ROUTES from './../Routes'

// export const doCreateUserWithEmailAndPassword = (email, password) =>
//   auth.createUserWithEmailAndPassword(email, password);

// // Sign In
// export const doSignInWithEmailAndPassword = (email, password) =>
//   auth.signInWithEmailAndPassword(email, password);

// export const doSignInWithPhone = phoneNumber =>
//   auth.signInWithPhoneNumber(phoneNumber);

// // Sign out
// export const doLogOut = dispatch => {
//   rtdb.goOffline();
//   auth.signOut();
//   dispatch({
//     type: ACTIONS.RESET_APP
//   });
//   dispatch({
//     type: ACTIONS.RESET_USERS
//   });
//   dispatch({
//     type: ACTIONS.RESET_FORMS
//   });
//   Router.push(ROUTES.LANDING);
// };

// // Password Reset
// export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// // Password Change
// export const doPasswordUpdate = password =>
//   auth.currentUser.updatePassword(password);
