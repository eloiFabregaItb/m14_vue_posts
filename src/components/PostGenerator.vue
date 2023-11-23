<script setup lang="ts">
  import { ref } from 'vue';

  import { type emojiType, type postType} from "../types"
  import {emojis} from "../constants"
  const MAX_LENGTH = 280



// defineProps<{
//   msg: string
// }>()

  const emit = defineEmits<{
    (e: 'post', value: postType ): void
  }>()

  const emojiSelected = ref<emojiType | undefined>(undefined)

  const text = ref("")

  function post(){
    const emoji = emojis.find(x=>x.description===emojiSelected.value)
    if(emojiSelected!==undefined && emoji && text.value.length>0){
      const post:postType = {
        content:text.value,
        emoji,
        timestamp:Date.now()
      }
      
      emit("post",post)
    }
  }

</script>

<template>

  <div class="postForm">

    <textarea v-model="text" :maxlength="MAX_LENGTH"></textarea>

    <ul>
      <li v-for="{emoji, description} in emojis">
        <button 
          :title="description"
          @click="emojiSelected=description"
          :class="{ active: emojiSelected === description }"
        >{{ emoji }}</button>
      </li>
    </ul>

    <div class="actions">
      <p>{{ text.length }} / {{ MAX_LENGTH }}</p>
      <button @click="post">Post</button>
    </div>
  </div>


</template>

<style scoped>

.postForm{
  background-color: darkgray;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: center;
  border-radius: 5px;

  width: 550px;
}

ul{
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

ul li button{
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

ul li button.active{
  background-color: aqua;
}

.actions{
  display: flex;
  justify-content: space-between;
  width: 100%;
}

textarea{
  width: 500px;
  height: 200px;
  resize: none;
  border: none;
  border-radius: 5px;  
}
</style>
