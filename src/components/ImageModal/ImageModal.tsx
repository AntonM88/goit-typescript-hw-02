import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    padding: "2px",
  },
  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

interface ImgUrls {
  regular: string;
}

interface SelectImg {
  urls: ImgUrls;
}

interface ImgModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  selectImg: SelectImg | null;
}

export const ImageModal: React.FC<ImgModalProps> = ({
  modalIsOpen,
  closeModal,
  selectImg,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={selectImg?.urls?.regular} alt={selectImg?.alt} />
      </Modal>
    </div>
  );
};
