<template>
  <div class="blog-home-wrapper">
    <div class="blog-home">
      <header>
        <h1><strong>Welcome</strong> to my blog!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet
          repellendus suscipit dolorem velit. Inventore laboriosam voluptatem,
          quasi libero aspernatur provident vero accusantium sit minima,
          perspiciatis, obcaecati asperiores. Quia placeat, cum quod amet
          provident voluptatibus accusamus! Libero similique ullam quasi
          reiciendis dicta earum eligendi dolor ipsum. Perferendis fugit quae
          suscipit, enim voluptate quo accusamus nihil provident at, dolorum,
          corporis vel tenetur! Minima tempore magni nisi ipsum facilis cum
          quisquam, expedita minus quod dolores iusto laboriosam magnam nihil
          obcaecati? Blanditiis quas animi deserunt pariatur libero minima.
          Officiis explicabo est fugiat. Sapiente, ut. Non vero, magni doloribus
          aliquid odit alias perferendis aperiam?
        </p>
      </header>

      <div class="search">
        <h2>Search my posts</h2>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter at least 3 letters"
          v-model="search"
        />

        <BlogPostCard
          v-for="post in searchResult"
          :path="post._path"
          :title="post.title"
          :description="post.description"
          :recommended="post.recommended"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "draft",
});

const search = ref("");
const searchResult = ref<any>([]);
const recommendedPosts = ref<any>([]);

onMounted(async () => {
  const posts = await queryContent("/blog")
    .where({
      recommended: { $eq: true },
    })
    .only(["_path", "title", "description", "recommended"])
    .limit(4)
    .find();

  recommendedPosts.value = posts;
  searchResult.value = posts;
});

watch(search, async () => {
  if (search.value.length <= 3) {
    searchResult.value = recommendedPosts.value;
    return;
  }

  const { data } = await useAsyncData("blog", () =>
    queryContent("/blog")
      .where({
        $or: [
          { title: { $icontains: search.value } },
          { description: { $icontains: search.value } },
        ],
      })
      .sort({
        recommended: -1,
      })
      .only(["_path", "title", "description", "recommended"])
      .limit(4)
      .find(),
  );

  searchResult.value = data.value;
});
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.blog-home-wrapper {
  display: flex;
  justify-content: center;
}

.blog-home {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > header {
    > h1 {
    }

    > p {
      color: darken(white, 20%);
    }
  }

  > .search {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;

    > input {
      font-size: 20px;
      border-radius: 3px;
      border: solid 1px darken($bg-primary, 3%);
      background-color: lighten($bg-primary, 15%);
      padding: 4px 10px;
      outline: none;
      color: darken(white, 20%);

      &:active,
      &:focus {
        border-color: $txt-secondary;
      }
    }
  }
}

@media (min-width: $size-mobile) {
  .blog-home-wrapper {
    > .blog-home {
      max-width: 1000px;
    }
  }
}

@media (max-width: $size-mobile) {
}
</style>
