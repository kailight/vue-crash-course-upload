<template>
<div class="skills" id="skills">
  <div class="skill" v-for="skill in Skills">
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
  data() {
    // This is the object we are working with
    return {
      Skills : [
        {
          title : 'Music',
          style : "background-image : url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmY8b8oXw0ZLL0pOG-xBs3y46psTYhW7oiyqTusJ2wsqwio5SX')",
          description : `
<p>I play guitar in a rock band.</p>
<p>Our next gig going to be on sunday. Jump in!</p>
`
        },
        {
          title : 'Cats',
          style : "background-image : url('https://cdn.pixabay.com/photo/2018/08/06/22/35/siamese-cat-3588544__340.jpg')",
          description : `
<p>Proud owner of 2 siamese kittens.<p>
<p>Should I mention they are twins?</p>
`
        },
        {
          title : 'Snowboarding',
          style : "background-image : url('https://cdn.pixabay.com/photo/2018/02/23/17/56/snowboarding-3176182_960_720.jpg')",
          description : `
<p>Snowboarding is my passion!</p>
<p>Waiting for the snow every year.</p>
`
        },
      ]
    }
  },
  methods: {
  }
}
</script>
