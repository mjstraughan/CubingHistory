import React, { useState, useEffect } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImageCollage({ images = [] }) {
  const [loadedImages, setLoadedImages] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const loadImageDimensions = async () => {
      const promises = images.map
      (
        (image) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = image.src;
            img.onload = () =>
              resolve({
                src: image.src,
                width: img.naturalWidth,
                height: img.naturalHeight,
              });
          })
      );

      const resolvedImages = await Promise.all(promises);
      setLoadedImages(resolvedImages);
    };

    loadImageDimensions();
  }, [images]);

  useEffect(() => {
    if (index >= 0) {

      window.history.pushState({ lightboxOpen: true }, "");

      const handlePopState = () => {
        setIndex(-1);
      };

      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [index]);

  const slides = loadedImages.map(({ src }) => ({ src }));

  return (
    <>
      {loadedImages.length > 0 && (
        <RowsPhotoAlbum
          photos={loadedImages}
          onClick={({ index }) => setIndex(index)}
        />
      )}
      <Lightbox
  open={index >= 0}
  index={index}
  slides={slides}
  close={() => setIndex(-1)}

  render={{ 
    container: (props) => (index >= 0 ? <div {...props} /> : null) 
  }}

  controller={{ closeOnBackdropClick: true }}
  on={{
    exit: () => {

      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    },
  }}
/>

    </>
  );
}