<template>
  <PageWrapper>
    <div class="blog-home">
      <header>
        <h1>🚀 <strong>Welcome</strong> to my blog!</h1>
        <p>
          This page will contain a selection of posts written by myself that
          could be anything from tech reviews, to programming tutorials, or
          general think-pieces. My aim is to write interesting posts that
          reflect the things that I'm working on or doing with my life.
        </p>
        <br />
        <p>
          If you have anything you want me to write about or any corrections
          then shoot me a message through one of my socials.
        </p>
        <br />
        <p>Enjoy! 😄</p>
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
          :draft="post.draft"
        />
      </div>
    </div>
  </PageWrapper>
</template>
<script setup lang="ts">
useHead({
  title: "Tom Smith | Blog",
});

const search = ref("");
const searchResult = ref<any>([]);
const recommendedPosts = ref<any>([]);

const dev = process.env.NODE_ENV === "development";

onMounted(async () => {
  const posts = await queryContent("/blog")
    .where({
      $and: [{ recommended: { $eq: true } }, { draft: { $in: [false, dev] } }],
    })
    .only(["_path", "title", "description", "recommended", "draft"])
    .limit(4)
    .find();

  console.log(posts);
  recommendedPosts.value = posts;
  searchResult.value = posts;
});

watch(search, async () => {
  if (search.value.length < 3) {
    searchResult.value = recommendedPosts.value;
    return;
  }

  const { data } = await useAsyncData("blog", () =>
    queryContent("/blog")
      .where({
        $and: [
          {
            $or: [
              { title: { $icontains: search.value } },
              { description: { $icontains: search.value } },
            ],
          },
          {
            draft: { $in: [false, dev] },
          },
        ],
      })
      .sort({
        recommended: -1,
      })
      .only(["_path", "title", "description", "recommended", "draft"])
      .limit(4)
      .find(),
  );

  searchResult.value = data.value;
});
</script>
<style scoped lang="scss">
@use "~/assets/style/util/index" as *;

.blog-home {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > header {
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
</style>
