import ArrowRight from './../../../assets/arrow-right.svg';

const ViewBrandRequestHistoryButton = ({
  setModalOpen,
  setApplicantInfo,
  id,
  name,
  nickName,
  isChosen,
  brandRequestCounts,
}) => {
  const handleBrandRequestHistoryClick = (id, name, nickName, isChosen) => {
    setModalOpen(prev => !prev);
    setApplicantInfo({ id, name, nickName, isChosen });
  };

  return (
    <button
      className={brandRequestCounts !== 0 ? 'table-body-row_count-valid' : ''}
      onClick={() =>
        handleBrandRequestHistoryClick(id, name, nickName, isChosen)
      }
    >
      {brandRequestCounts}회
      <img src={ArrowRight} alt="" style={{ marginLeft: '0.3rem' }} />
    </button>
  );
};

export default ViewBrandRequestHistoryButton;
