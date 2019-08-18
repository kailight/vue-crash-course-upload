<template>
  <div class="tabs-wrapper tabs">
    <div class="tab-content unknown_user" v-if="failedToLogin()">
      <div class="message1">{{User.name}}? Nice to meet you!</div>
      <div class="message2"><a href="#skills">Let me tell you more about things I like</a></div>
      <skills :skills="Skills">
      </skills>
      <div class="contacts">
        Drop me a message via email: <a href="mailto:user@site.com">user@site.com</a>
      </div>
    </div>
    <content-for-neo class="tab-content" v-if="loggedInAs('neo66')">
    </content-for-neo>
    <content-for-gf class="tab-content" v-if="loggedInAs('gf66')">
    </content-for-gf>
    <content-for-mom class="tab-content" v-if="loggedInAs('mom77')">
    </content-for-mom>
  </div>
</template>

<style>
.unknown_user {

}

.unknown_user .message1 {
  font-size: 1.4rem;
}

.unknown_user .message2 {
  margin-top: 0.8rem;
  font-size: 0.8rem;
}

.unknown_user .message2 a {
  text-decoration: none;
}

.unknown_user .contacts {
  clear: both;
  margin-top: 2rem;
  font-size: 0.8rem;
}


.wrapper {
  /*border: 1px solid darkred;*/
}



/* TABS */
.tabs-wrapper {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.tab-controls {
  padding: 0 1rem;
}

.tab-controls a {
  padding: 0.3rem 1rem;
  line-height: 1.5rem;
  color : #fff;
  border: 1px solid #a9463a;
  background-color: #a9463a;
  border-bottom: 0;
  text-decoration: none;
  border-radius: 0.7rem 0.7rem 0 0;
  font-size: 0.8rem;
}

.tab-content {
  text-align: center;
  padding: 1rem;
  min-height: 10rem;
}
</style>


<script>
import ContentForNeo from './Neo.vue'
import ContentForGF from './GF.vue'
import ContentForMom from './Mom.vue'
import Skills from './Skills.vue'

export default {
  components : {
    'content-for-neo' : ContentForNeo,
    'content-for-gf' : ContentForGF,
    'content-for-mom' : ContentForMom,
    'skills' : Skills,
  },
  props : {
    User: Object,
    Users: Array,
    Skills: Array
  },
  data() {
    // This is the object we are working with
    return {
    }
  },
  computed : {
  },
  methods: {
    failedToLogin() {
      return !this.User.loggedIn && this.User.haveBeenTryingToLogin
    },
    loggedInAs(username) {
      if (this.User.loggedIn && this.User.name === username) {
        return true
      } else {
        return false
      }
    },
  }
}

</script>
