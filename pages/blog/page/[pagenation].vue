<template>
  <div class="wrapper">


    <div class="container">
      <h1>テストブログ</h1>
      <p>てすてすてすと</p>
      <ul>
        <li v-for="singleData in data" :key="singleData.id" class="blogCard">
          <article>
            <h2>{{ singleData.title }}</h2>
            <p>{{ singleData.excerpt }}</p>
            <date>投稿日時：({{ singleData.date }})</date>
            <NuxtLink :to="singleData._path">続きを読む</NuxtLink>
          </article>
          <div class="blogImg">
            <img :src="singleData.image" :alt="singleData.excerpt">
          </div>
        </li>
      </ul>
      <Pagenation :numberPages="numberPages"></Pagenation>
    </div>
  </div>

</template>

<script setup>
const blogsPerPage = 5

const currentPage = useRoute().params.pagenation

const { data } = await useAsyncData("blogQuery", () => 
    queryContent("/blog")
    .sort({ id: -1 })
    .limit(blogsPerPage)
    .skip(blogsPerPage * (currentPage - 1))
    .find()
)

const allBlogs = await queryContent("/blog").find()

const numberPages = Math.ceil(allBlogs.length / blogsPerPage)

useHead({
    title: "ブログ",
    meta: [
        { name: "description", content: "ブログページです" }
    ],
})
</script>