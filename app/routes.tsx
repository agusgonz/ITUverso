import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("posts", "routes/posts/posts.tsx"),
  route("Form", "routes/Form/Form.tsx"), // <--- registra /posts
] satisfies RouteConfig;
