import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Loading",
      component: () => import("./components/Loading/Loading.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./components/auth/Login.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/main",
      name: "MainHomePage",
      component: () => import("./components/MainHomePage.vue"),
      meta: { transition: "fade" }
    },
    {
      path: "/main/loading",
      name: "Ref",
      component: () => import("./components/Ref.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/signup",
      name: "SignUp",
      component: () => import("./components/auth/SignUp.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/menu",
      name: "Menu",
      component: () => import("./components/Menu.vue"),
      meta: { transition: "fade-in-left" }
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("./components/Profile/Profile.vue"),
      meta: { transition: "fade-in-right" }
    },
    {
      path: "/password/update",
      name: "PasswordChange",
      component: () => import("./components/auth/PWchangePage.vue"),
      meta: { transition: "fade" }
    },
    {
      path: "/recipe/create",
      name: "RecipeCreate",
      component: () => import("./views/recipeCreatePage.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/menu/:recipe_select",
      name: "RecipeShowAll",
      component: () => import("./components/recipeShowAllPage.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/recipe/:recipe_id",
      name: "RecipeShowOne",
      component: () => import("./components/recipeShowOnePage.vue"),
      meta: { requiresAuth: true }
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (JSON.parse(sessionStorage.getItem("userinfo"))) {
//     if (to.name === "SignUp" || to.name === "Login" || to.name === "Loading") {
//       return next("/Main");
//     } else {
//       return next();
//     }
//   } else {
//     if (to.name === "SignUp" || to.name === "Login" || to.name === "Loading") {
//       return next();
//     } else {
//       return next("/");
//     }
//   }
// });

export default router;
