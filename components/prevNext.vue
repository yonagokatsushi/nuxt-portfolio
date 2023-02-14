<template>
    <div class="pnWrapper">
        <NuxtLink :to="prev._path" v-if="prev">

            <img src="~/assets/images/arrow-left.svg" alt="arrow-left">
            <h3>{{prev.title}}</h3>
        </NuxtLink>
        <NuxtLink :to="next._path" v-if="next">
            <img src="~/assets/images/arrow-right.svg" alt="arrow-right">
            <h3>{{next.title}}</h3>
        </NuxtLink>
    </div>
</template>

<script setup>
  const props = defineProps({
    prev: Object,
    next: Object,
  })

</script>