import Close from './../../../assets/close.svg';

const CloseButton = ({ setModalOpen }) => {
  return (
    <button
      className="close-button"
      onClick={() => setModalOpen(prev => !prev)}
    >
      <img src={Close} alt="모달 닫기" />
    </button>
  );
};

export default CloseButton;
