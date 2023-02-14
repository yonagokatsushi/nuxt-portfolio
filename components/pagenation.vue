<template>
  <h2 class="pagenationWrapper">
    <NuxtLink v-for="(pagenationLink, index) in pagenationLinks" :to="pagenationLink" :key="index">

      {{ index + 1 }}
    </NuxtLink>
  </h2>
</template>

<script setup>
const props = defineProps({
  numberPages: Number,
})

const pagenationLinks = Array.from({ length: props.numberPages }, (_,i) => i === 0 ? `/blog` : `/blog/page/${i + 1}`)

</script>