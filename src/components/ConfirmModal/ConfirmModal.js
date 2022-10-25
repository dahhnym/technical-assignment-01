import './ConfirmModal.scss';

const ConfirmModal = ({
  checkedIdCount,
  setIsConfirmModalOpen,
  isChosen,
  fetchApplicantList,
  fetchChosenReviewerList,
  resetCheckedStatus,
}) => {
  const executedAction = isChosen ? '취소' : '선정';
  const reviewerListName = isChosen ? '신청' : '선정';

  const handleButtonClick = () => {
    setIsConfirmModalOpen(prev => !prev);
    fetchChosenReviewerList();
    fetchApplicantList();
    resetCheckedStatus();
  };

  return (
    <div className="overlay">
      <div className="confirm-modal-container">
        <ul className="confirm-modal_message">
          <li style={{ fontWeight: '500' }}>
            {`${
              checkedIdCount === 0 ? 1 : checkedIdCount
            }명을 ${executedAction}하셨습니다.`}
          </li>
          <li>
            {`${executedAction} 목록은 `}
            <span style={{ color: '#0067ff' }}>
              {reviewerListName} 리뷰어 탭
            </span>
            에서 확인하실 수 있습니다.
          </li>
        </ul>
        <button
          className="confirm-modla_button"
          onClick={() => handleButtonClick()}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
