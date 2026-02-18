import React, { useState, useEffect, useCallback } from "react";
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
      ((image) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = () => resolve({ src: image.src, width: img.naturalWidth, height: img.naturalHeight });
        })
      );
      const resolvedImages = await Promise.all(promises);
      setLoadedImages(resolvedImages);
    };
    loadImageDimensions();
  }, [images]);

  
  const closeLightbox = useCallback(() => {
    if (index >= 0) {
      setIndex(-1);

      if (window.history.state?.lightbox) {
        window.history.back();
      }
    }
  }, [index]);

  useEffect(() => {
    if (index >= 0) {

      window.history.pushState({ lightbox: true }, "");

      const handleBack = () => setIndex(-1);
      window.addEventListener("popstate", handleBack);

      return () => {
        window.removeEventListener("popstate", handleBack);

        document.body.style.overflow = "auto";
      };
    }
  }, [index]);

  const slides = loadedImages.map(({ src }) => ({ src }));

  return (
    <>
      {loadedImages.length > 0 && (
        <RowsPhotoAlbum
          photos={loadedImages}
          onClick={({ index: i }) => setIndex(i)}
        />
      )}
      <Lightbox
        open={index >= 0}
        index={index}
        slides={slides}
        close={closeLightbox}
        on={{ exit: () => (document.body.style.overflow = "auto") }}
      />
    </>
  );
}