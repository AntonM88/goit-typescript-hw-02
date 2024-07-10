import { toast, Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getImg } from "../services/api";
import {
  SearchBar,
  ImageGallery,
  LoadMoreBtn,
  Loader,
  Heading,
  ImageModal,
} from "components";

interface Image {
  id: string;
  url: string;
  alt: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectImg, setSelectImg] = useState<Image | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await getImg(query, page);

        if (!total_pages) {
          setIsEmpty(true);
          return;
        }

        setImages((prev) => [...prev, ...results]);
        setShowBtn(page < total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const onSubmit = (newQuery:string) => {
    if (!newQuery.trim()) {
      toast.error("Search field is epmty");
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setShowBtn(false);
    setIsEmpty(false);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleModalOpen = (img: Image) => {
    setIsOpenModal(true);
    setSelectImg(img);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectImg(null);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && (
        <ImageGallery photos={images} handleModalOpen={handleModalOpen} />
      )}
      {showBtn && <LoadMoreBtn onClick={handleLoadMore} />}

      {isEmpty && <Heading text={"We did not found photos"} />}
      {isLoading && <Loader />}
      {error && <Heading text={`Something went wrong ${error}`} />}
      <ImageModal
        modalIsOpen={isOpenModal}
        closeModal={closeModal}
        selectImg={selectImg}
      />
    </>
  );
};

export default App;
