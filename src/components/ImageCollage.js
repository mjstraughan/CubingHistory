import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function AutoAspectImageCollage({ images }) {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const fetchImages = async () => {
      const photoPromises = images.map(async (image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            resolve({
              src: image.src,
              width: img.naturalWidth / img.naturalHeight,
              height: 1,
            });
          };
          img.onerror = reject;
          img.src = image.src;
        });
      });

      try {
        const photoData = await Promise.all(photoPromises);
        setPhotos(photoData);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    fetchImages();
  }, [images]);

  return (
    <>
      <Gallery
        photos={photos}
        onClick={(event, { index }) => setIndex(index)}
      />
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos.map((img) => ({ src: img.src }))}
        index={index}
      />
    </>
  );
}
