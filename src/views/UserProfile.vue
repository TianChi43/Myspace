<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <UserProfileWrite @post_a_post="post_a_post" />
      </div>
      <div class="col-9">
        <UserProfilePosts :posts="posts" />
      </div>
    </div>
  </ContentBase>
</template>
  
<script>
import ContentBase from "../components/ContentBase.vue";
import UserProfileInfo from "../components/UserProfileInfo.vue";
import UserProfilePosts from "../components/UserProfilePosts.vue";
import { reactive } from "vue";
import UserProfileWrite from "../components/UseProfileWrite.vue";
import { useRoute } from "vue-router";

export default {
  name: "UserProfile",
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrite,
  },
  setup() {
    const route = useRoute();
    const userId = route.params.userId;
    console.log(userId);
    const user = reactive({
      id: "1",
      username: "TianChi",
      lastname: "Tian",
      firstname: "Chi",
      followerCount: 1,
      is_followed: true,
    });

    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          userId: 1,
          content: "1adfa",
        },
        {
          id: 2,
          userId: 3,
          content: "dasfd6",
        },
        {
          id: 3,
          userId: 4,
          content: "dsafdasdaf6",
        },
      ],
    });
    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.followerCount++;
    };
    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount--;
    };

    const post_a_post = (content) => {
      posts.count++;
      posts.posts.unshift({
        //在最前面加是unshift,后面是push
        id: posts.count,
        userId: 4,
        content: content,
      });
    };
    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
    };
  },
};
</script>


<style scoped>
</style>