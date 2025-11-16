import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import RBForm from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

export default function PostForm() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImages(previews);
  };

  return (
    <div className="container mt-4 p-4 rounded-4 shadow-sm bg-light" style={{ maxWidth: "600px" }}>
      <h3 className="text-center mb-4 fw-bold text-primary">Nuevo Post</h3>
      <RBForm>
        <RBForm.Group className="mb-3" controlId="formBasicName">
          <RBForm.Label className="fw-semibold">Nombre del autor</RBForm.Label>
          <RBForm.Control
            type="text"
            placeholder="nombre y apellido"
            className="rounded-3 py-2 px-3"
            style={{ fontSize: "0.9rem" }}
          />
        </RBForm.Group>

        <RBForm.Group className="mb-3" controlId="formBasicContent">
          <RBForm.Label className="fw-semibold">Contenido del post</RBForm.Label>
          <RBForm.Control
            as="textarea"
            rows={3}
            placeholder="Escribe tu contenido..."
            className="rounded-3 py-2 px-3"
            style={{ fontSize: "0.9rem" }}
          />
        </RBForm.Group>

        <RBForm.Group className="mb-3" controlId="formBasicTags">
          <RBForm.Label className="fw-semibold"># Tags</RBForm.Label>
          <RBForm.Control
            type="text"
            placeholder="Ej: tecnología, arte, ciencia"
            className="rounded-3 py-2 px-3"
            style={{ fontSize: "0.9rem" }}
          />
        </RBForm.Group>

        <RBForm.Group className="mb-3" controlId="formFile">
          <RBForm.Label className="fw-semibold">Imagen del post</RBForm.Label>
          <RBForm.Control
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="rounded-3"
          />
        </RBForm.Group>

        {/* Vista previa */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              thumbnail
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            type="submit"
            className="px-4 py-2 rounded-3 fw-semibold shadow-sm"
          >
            Cargar
          </Button>
        </div>
      </RBForm>
    </div>
  );
}
