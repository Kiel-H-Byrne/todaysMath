// import * as firebase from "firebase/app"
// import "firebase/firestore"

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  Query,
  query,
  setDoc,
} from "firebase/firestore"
import { fsdb } from "./firebase"

// import * as ACTIONS from "./../Actions/actionConstants";
//UID
// import uuidv4 from "uuid/v4";
const postsRef = collection(fsdb, "POSTS")
const docRef = doc(postsRef, new Date().getDate().toString())

// const watchCollection = function(collection, ...filters) {

//   switch(collection) {
//     case "POSTS": { collection = postsCollection; break }
//     default: return
//   }
//   collection
//   // .where(filters[0], == filters[1])
//   .onSnapshot(function(querySnapshot) {
//     //update state with this data...
//     console.log("i'm Watching")
//     querySnapshot
//     .docChanges()
//     .forEach(change => {
//       if (change.type === "added") {
//         let data = change.doc.data();
//         console.log("New post", change.doc.data())
//         let doc = {}
//         doc[change.doc.id] = data;
//         dispatch({type: ACTIONS.POSTS_API_RESULT, payload: doc})
//       }
//       if (change.type === "modified") {
//         console.log("Modified post", change.doc.data())
//         let data = change.doc.data();

//         //update state (state.posts.byId & state.posts.allIds)
//         // console.log(state.posts.byId)
//         console.log(data)
//         // dispatch({type: ACTIONS.POSTS_API_RESULT, payload: {...state.posts.byId, data}})
//       }
//       if (change.type === "removed") {
//         let data = change.doc.data();
//         console.log("Deleted post", change.doc.data()._id)
//         // dispatch({type: ACTIONS.POSTS_API_RESULT, payload: data})
//         //remove postID from users, services
//       }
//     });
//   });
// };

// const unWatchCollection = function(filter){
//   collection(filter)
//     .onSnapshot(function () {});
// }

// const watchDocument = function(collection, id) {
//   console.log("i'm Watching")
//   switch(collection) {
//     case "POSTS": { collection = postsCollection; break }
//     case "SERVICES": { collection = servicesCollection; break }
//     case "GIFTS": { collection = giftsCollection; break }
//     default: return
//   }
//   collection
//   .doc(id)
//   // .where(filters[0], == filters[1])
//   .onSnapshot({
//     includeMetadataChanges: true
//   },function(docSnapshot) {
//     let doc = {}
//     //update state with this data...
//     doc[docSnapshot.id] = docSnapshot.data();
//     console.log(doc)
//     dispatch({type: ACTIONS.POSTS_API_RESULT, payload: doc})
//   });
// };

// const unWatchDocument = function(filter, id){
//   collection(filter)
//     .doc(id)
//     .onSnapshot(function () {});
// }

// == POSTS == //
const _postsCreate = function(duid, data) {
  console.log("submitting to db...", data)
  let ref = doc(postsRef, duid)
  return ref
    .set({ ...data, _id: ref.id }, (error) => {
      if (error) {
        return error
      } else {
        return ref.id
      }
    })
    .then(() => ref.id)
    .catch((error) => error)
}
const postCreate = async function(data) {
  console.log("submitting to db...", data)

  await setDoc(docRef, data, { merge: true })
}

const postsFetch = async function(query) {
  const docRef = doc(postsRef, query)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() && docSnap.data()
}

const _postsFetch = function(date) {
  let docRef = doc(postsRef, date)
  return docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        // console.log("Document data:", doc.data());
        return doc.data()
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!")
        return null
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error)
    })
}

const postsFetchAll = function() {
  //return {"postId": {postData}}
  return postsRef
    .get()
    .then((querySnapshot) => {
      let docs = {}
      querySnapshot.forEach((doc) => {
        docs[doc.id] = doc.data()
      })
      return docs
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

const postsFetchOne = function(uid) {
  let doc = {}
  return uid
    ? postsRef
        .doc(uid)
        .get()
        .then((docSnapshot) => {
          doc[docSnapshot.id] = docSnapshot.data()
          return doc
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    : null
}
const postsfetchWhere = function(param, query) {
  query = query || ""
  console.log(param, query)
  return postsRef
    .where(param, "==", query)
    .get()
    .then((snapshot) => {
      let objects = []
      if (snapshot.empty) {
        console.log("no matching documents")
        return objects
      }
      snapshot.forEach((doc) => {
        let obj = { _id: doc.id, ...doc.data() }
        objects = [...objects, obj]
      })
      return objects
    })
    .catch((err) => {
      console.log("Error", err)
    })
}

const postsUpdate = function(duid, data) {
  // A post entry.

  let dateRef = doc(postsRef, duid)
  let messages = {}
  messages[data.uuid] = data
  dateRef.set(messages, {
    merge: true,
  })

  // dateRef.update({
  //   messages: firestore.FieldValue.arrayUnion(postData)
  // })
}

const postsDelete = function(uid) {}

export const submitPost = function(duid, data) {
  let post = {}
  post[duid] = data
  return postsRef
    .add(post)
    .then((docRef) => {
      return docRef.id
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

// export const getMyPosts = (uid, dispatch) => {
//   // eslint-disable-next-line
//   let postsRef;

//   return Object.keys(myPostIds).forEach(postId => {
//     return (postsRef = fsdb
//       .collection("POSTS")
//       .doc(`${postId}`)
//       .get()
//       .then(doc => {
//         dispatch({
//           type: UPDATE_MY_POSTS,
//           payload: doc.data()
//         });

//         //Watching dposts
//         watchMyPosts({ uid: uid, dispatch, postId });
//       }));
//   });
// };

export {
  postCreate,
  postsFetchOne,
  postsFetch,
  postsFetchAll,
  postsfetchWhere,
  postsDelete,
  postsUpdate,
}
