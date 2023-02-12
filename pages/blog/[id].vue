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
  </div>

</template>

<script setup>


  const { data } = await useAsyncData(useRoute().path, () =>
    queryContent(useRoute().path).findOne()
  )

 console.log(useRoute().path);
</script>
