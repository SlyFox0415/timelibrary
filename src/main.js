// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'

import App from './App'
import router from './router'
import store from './store'

// Firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
// Dont need it
// import 'firebase/messaging'
// import 'firebase/storage'

Vue.use(
  Vuelidate,
  Uimini
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Configuration
    var config = {
      apiKey: 'AIzaSyDqCRKBj3JdCoEZpNreBAbPTw80QVlvSjU',
      authDomain: 'time-library-41a95.firebaseapp.com',
      databaseURL: 'https://time-library-41a95.firebaseio.com',
      projectId: 'time-library-41a95',
      storageBucket: 'time-library-41a95.appspot.com',
      messagingSenderId: '117844089792'
    }
    // Firebase Initialize
    firebase.initializeApp(config)

    // Auth Check
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Check Logged
        this.$store.dispatch('loggedUser', user)
        // Loading All Tasks
        this.$store.dispatch('loadTasks')
        // Loading All Tags
        this.$store.dispatch('loadTags')
      }
    })
  }
})
