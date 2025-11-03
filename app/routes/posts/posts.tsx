import React from "react";
import PostCard from "~/Components/Posts";

/**
 * Feed de posts que renderiza múltiples PostCard con Tailwind.
 */
export default function PostsFeed() {
  const posts = [
    {
      title: "Primer post",
      content: "Aprendiendo React con Tailwind y componentes reutilizables.",
      author: "Agustín",
      tags: ["react", "frontend", "javascript"],
    },
    {
      title: "Segundo post",
      content: "Cómo mejorar el rendimiento de tus aplicaciones web.",
      author: "María",
      tags: ["performance", "web", "tips"],
    },
    {
      title: "Tercer post",
      content: "Explorando nuevas herramientas del ecosistema de React.",
      author: "Juan",
      tags: ["react", "ecosistema", "herramientas"],
    },
  ];

  return (
    <section className="max-w-5xl mx-auto p-6 grid gap-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Últimos posts</h1>

      {posts.map((post, index) => (
        <PostCard
          key={index}
          post={{ title: post.title, content: post.content, author: post.author }}
          tags={post.tags}
          selectedTag={post.tags[0]}
          onTagChange={(tag) => console.log(`Post ${index + 1}:`, tag)}
        />
      ))}
    </section>
  );
}
