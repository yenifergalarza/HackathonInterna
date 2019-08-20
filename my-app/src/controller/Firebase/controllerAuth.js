export const funcLogin = (emailLogIn, passwordLogIn) => firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn);

export const funcRegister = (emailSignIn, passwordSignIn) => firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)

export const funcGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};

export const funcFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
}

export const signOut = () => firebase.auth().signOut();

export const activeUser = (cb) => firebase.auth().onAuthStateChanged(cb)

export const currentUser = () => firebase.auth().currentUser

export const getUserData = (user, input) => {
    const firestore = firebase.firestore();
    return firestore.doc(`users/${user.uid}`).set({
      name: user.displayName || input,
      email: user.email,
      photo: user.photoURL || 'assets/default-user.png',
      uid: user.uid
    });
  }