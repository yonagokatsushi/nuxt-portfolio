<template>
  <div class="">


    <div class="image">
      <img :src="data.image" :alt="data.excerpt">
    </div>
    <div class="">
      <h1>個別ページ</h1>
      <date>投稿日時：({{ data.date }})</date>
      <ContentDoc />
    </div>
    <PrevNext :prev="prev" :next="next" />
  </div>

</template>

<script setup>
import PrevNext from '../../components/prevNext.vue';



  const { data } = await useAsyncData(useRoute().path, () =>
    queryContent(useRoute().path).findOne()
  )

  const [ prev, next ] = await queryContent("/blog")
    .sort({ id: 1 })
    .findSurround(useRoute().path)



//  console.log(prev);
//  console.log(useRoute().path);
</script>
