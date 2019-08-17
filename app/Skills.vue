<template>
<div class="skills" id="skills">
  <div class="skill" v-for="skill in skills">
    <div class="title">{{skill.title}}</div>
    <div class="image" :style="skill.style"/>
    <div class="description" v-html="skill.description">
    </div>
  </div>
</div>
</template>


<style>
.skills {
  margin: 4rem auto 2rem auto;
  display: flex;
  clear: both;
  max-width: 800px;
}

.skills .skill {
  display: inline-block;
  width: 33%;
  max-width: 33%;
  padding: 0.7rem;
  /*border: 1px solid darksalmon;*/
}

.skills .skill .title {
  color: #000;
  font-size: 1.2rem;
}

.skills .skill .description {
  font-size: 0.8rem;
  text-align: left;
}

.skills .skill .image {
  margin-top: 1rem;
  padding-top: 70%;
  background-position: center;
  background-size: cover;
  border: 1px solid #666;
  /*border-radius: 0.4rem;*/
}
</style>


<script>
export default {
  props : {
    skills: Array
  },
  data() {
    // This is the object we are working with
    return {
    }
  },
  methods: {
  }
}
</script>
