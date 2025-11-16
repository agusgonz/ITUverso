import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("posts", "routes/posts/posts.tsx"), // <--- registra /posts
  route("tags", "routes/tags/tags.tsx"),   // <-- /tags
] satisfies RouteConfig;
