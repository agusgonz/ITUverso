import React from "react";

type Post = {
  title: string;
  content: string;
  author: string;
  image?: string; // ruta opcional de la imagen
};

type Props = {
  post: Post;
  tags: string[]; // lista de tags disponibles
  selectedTag?: string; // tag seleccionado actualmente
  onTagChange?: (tag: string) => void; // callback cuando cambia el select
};

export default function PostCard({ post, tags, selectedTag, onTagChange }: Props) {
  return (
    <article className="">
      {post.image ? (
        <img src={post.image} alt={post.title} className="postImage" />
      ) : null}

      <header className="">
        <h2 className="">{post.title}</h2>
        <div className="">
          <span>por <strong className="">{post.author}</strong></span>
        </div>
      </header>

      <section className="">
        <p>{post.content}</p>
      </section>

      <footer className="">
        <div className="postTags">
          {tags.length === 0 ? (
            <span className="noTags">Sin tags</span>
          ) : (
            tags.map((t) => (
              <span key={t} className="postTag">{t}</span>
            ))
          )}
        </div>

        <div className="">
          <span className="">Publicado hace 2 días</span>
        </div>
      </footer>
    </article>
  );
}
