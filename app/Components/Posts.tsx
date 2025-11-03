import React from "react";

/**
 * PostComponent.tsx
 * Componente React (TypeScript) para mostrar un post con título, contenido, autor
 * y un dropdown (select) para elegir tags.
 *
 * Uso:
 * <PostCard
 *   post={{ title: "Hola", content: "Contenido...", author: "Agustín" }}
 *   tags={["react", "javascript", "web"]}
 *   selectedTag={"react"}
 *   onTagChange={(tag) => console.log(tag)}
 * />
 */

type Post = {
  title: string;
  content: string;
  author: string;
};

type Props = {
  post: Post;
  tags: string[]; // lista de tags disponibles
  selectedTag?: string; // tag seleccionado actualmente
  onTagChange?: (tag: string) => void; // callback cuando cambia el select
};

export default function PostCard({ post, tags, selectedTag, onTagChange }: Props) {
  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <header className="mb-4">
        <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>por <strong className="text-gray-700">{post.author}</strong></span>
        </div>
      </header>

      <section className="prose prose-sm mb-6">{/* Si usás @tailwindcss/typography */}
        <p>{post.content}</p>
      </section>

      <footer className="flex items-center justify-between gap-4">
        <label className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Tag:</span>
          <select
            value={selectedTag ?? ""}
            onChange={(e) => onTagChange?.(e.target.value)}
            className="ml-2 px-3 py-1 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            <option value="">-- Seleccionar --</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <div className="text-sm text-gray-500">
          <span className="italic">Publicado hace 2 días</span>
        </div>
      </footer>
    </article>
  );
}
