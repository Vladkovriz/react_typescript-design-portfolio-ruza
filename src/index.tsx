import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

import store from "./store/index";

// import firebase from "firebase/app";
// // import "firebase/auth";
// // import "firebase/database";
// import { createStore } from "redux";

// import {
//   ReactReduxFirebaseProvider
//   // firebaseReducer
// } from "react-redux-firebase";

// import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
import "./index.css";

// firebase.initializeApp({
//   apiKey: "AIzaSyAqQ6bsFKDZSOKSKR_H0GKG7J83hsak5UU",
//   authDomain: "ruzaportfolio-d0934.firebaseapp.com",
//   databaseURL: "https://ruzaportfolio-d0934.firebaseio.com",
//   projectId: "ruzaportfolio-d0934",
//   storageBucket: "ruzaportfolio-d0934.appspot.com",
//   messagingSenderId: "707599040551",
//   appId: "1:707599040551:web:cd709c58886daf8b5e4e02",
//   measurementId: "G-CVZMYGSCKE"
// });
// firebase.firestore(); // <- needed if using firestore

// const rrfConfig = {
//   userProfile: "users"
//   // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
//   // enableClaims: true // Get custom claims along with the profile
// };

// const initialState = {};
// const store = createStore(rootReducer);

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch
//   // createFirestoreInstance // <- needed if using firestore
// };

// function RootApp() {
//   return (
//     <Provider store={store}>
//       <ReactReduxFirebaseProvider {...rrfProps}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </ReactReduxFirebaseProvider>
//     </Provider>
//   );
// }
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
