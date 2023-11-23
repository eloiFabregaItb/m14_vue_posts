<script setup lang="ts">
import { ref } from 'vue'

import {type postType} from "./types"
import {formatTimestamp} from "./dateUtils"
import PostGenerator from './components/PostGenerator.vue';



// reactive state
const count = ref(0)

const posts = ref<postType[]>([{
    "content": "asdad",
    "emoji": {
        "emoji": "😆",
        "description": "Grinning"
      },
    "timestamp":1700779244511
}])


// functions that mutate state and trigger updates
function increment() {
  count.value++
}

function handlePost(post:postType){
  posts.value.unshift(post)
}

</script>

<template>
  <PostGenerator @post="handlePost"/>
  <ul>
    <li v-for="{content,emoji,timestamp} in posts" class="post">
      <div class="content">
        <span class="emoji-big" :title="emoji.description">{{ emoji.emoji }}</span>
        <p>{{ content }}</p>
      </div>
      <small class="date">{{ formatTimestamp(timestamp) }}</small>
    </li>
  </ul>
</template>


<style scoped>

  ul{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap:1rem;
    list-style: none;
    padding: 0;
  }

  .post{
    background-color: darkgray;
    width: 550px;
    border-radius: 5px;
    padding: 1rem;
  }

  .post .content{
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .post .content span{
    font-size: 5rem;
  }

  .post .content p{
    display: inline;
    overflow-wrap: break-word;
    inline-size: 400px;

  }


  .post .date{
    width: 100%;
    text-align: right;
    display: block;
  }


</style>