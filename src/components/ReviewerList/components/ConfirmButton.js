const ConfirmButton = ({
  checkedId,
  isChosen,
  handleConfirmButtonClick,
  maxRecruits,
  checkedIdArr,
}) => {
  return (
    <button
      onClick={() => {
        handleConfirmButtonClick(checkedId, isChosen);
      }}
      className={
        checkedIdArr.length > 0 && checkedIdArr.length <= maxRecruits
          ? `confirm-button ${isChosen ? 'active-white' : 'active-blue'}`
          : 'confirm-button inactive'
      }
    >
      {checkedIdArr.length && !isChosen ? `${checkedIdArr.length}명 ` : ''}
      {isChosen ? '선정 취소' : '선정하기'}
    </button>
  );
};

export default ConfirmButton;
