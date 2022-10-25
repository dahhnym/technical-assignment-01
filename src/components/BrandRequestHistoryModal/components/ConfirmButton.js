import { updateIsChosenStatus } from '../../../utils';

const ConfirmButton = ({
  id,
  isChosen,
  setIsConfirmModalOpen,
  setModalOpen,
}) => {
  const handleModalButtonClick = (id, isChosenStatus) => {
    updateIsChosenStatus(id, isChosenStatus);
    setIsConfirmModalOpen(prev => !prev);
  };

  return (
    <button
      className={`modal-submit-button ${
        isChosen ? 'active-white' : 'active-blue'
      }`}
      onClick={() => {
        handleModalButtonClick(id, isChosen);
        setModalOpen(prev => !prev);
      }}
    >
      {isChosen ? '선정 취소' : '선정하기'}
    </button>
  );
};

export default ConfirmButton;
