import firebase from '@/firebase';
import store from '@/store';

firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  if (user) {
    if (user.user) {
      user = user.user;
    }
    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
    };
    store.commit('auth/setUser', setUser);
  } else {
    store.commit('auth/setUser', null);
  }
});
