import { ImageCard, ImageCardProps, ImageUrls } from "../ImageCard/ImageCard";

interface Photo extends Omit<ImageCardProps, "handleModalOpen"> {
  id: string;
}

interface ImageGalleryProps {
  photos: Photo[];
  handleModalOpen: (image: { urls: ImageUrls; alt: string }) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos = [],
  handleModalOpen,
}) => {
  return (
    <ul className="grid grid-cols-4 gap-2">
      {photos.map((item) => (
        <ImageCard key={item.id} {...item} handleModalOpen={handleModalOpen} />
      ))}
    </ul>
  );
};
