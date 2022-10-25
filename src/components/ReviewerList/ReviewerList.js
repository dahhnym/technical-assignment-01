import { useEffect, useState } from 'react';
import './ReviewerList.scss';
import BrandRequestHistoryModal from '../BrandRequestHistoryModal/BrandRequestHistoryModal';
import { updateIsChosenStatus } from '../../utils';
import SelectCompleteAlert from '../SelectCompleteAlert/SelectCompleteAlert';
import TableHeader from './components/TableHeader';
import ConfirmButton from './components/ConfirmButton';
import TableBody from './components/TableBody';

const ReviewerList = ({
  applicantData,
  setModalOpen,
  modalOpen,
  maxRecruits,
  chosenReviewerData,
  fetchApplicantList,
  fetchChosenReviewerList,
}) => {
  const [reviewerData, setReviewerData] = useState();
  const [applicantInfo, setApplicantInfo] = useState({});
  const [checkedId, setCheckedId] = useState(0);
  const [checkedIdArr, setCheckedIdArr] = useState([]);
  const [isChosen, setIsChosen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    if (applicantData) {
      setReviewerData(applicantData);
      setIsChosen(false);
    }
    if (chosenReviewerData) {
      setReviewerData(chosenReviewerData);
      setIsChosen(true);
    }
  }, [applicantData, chosenReviewerData]);

  const handleConfirmButtonClick = (id, isChosenStatus) => {
    const checkedCount = checkedIdArr.length;
    if (checkedCount > 0 && checkedCount <= maxRecruits) {
      updateIsChosenStatus(id, isChosenStatus);
      setIsAlertOpen(prev => !prev);
    }
  };

  const resetCheckedStatus = () => {
    setCheckedIdArr([]);
    setCheckedId(0);
  };

  return (
    <>
      <div className="reviewer-list">
        <TableHeader />
        {reviewerData && (
          <TableBody
            reviewerData={reviewerData}
            checkedIdArr={checkedIdArr}
            setCheckedIdArr={setCheckedIdArr}
            setCheckedId={setCheckedId}
            fetchApplicantList={fetchApplicantList}
            fetchChosenReviewerList={fetchChosenReviewerList}
            setModalOpen={setModalOpen}
            setApplicantInfo={setApplicantInfo}
            isChosen={isChosen}
          />
        )}
      </div>
      <ConfirmButton
        handleConfirmButtonClick={handleConfirmButtonClick}
        maxRecruits={maxRecruits}
        checkedId={checkedId}
        checkedIdArr={checkedIdArr}
        isChosen={isChosen}
      />
      {modalOpen && (
        <BrandRequestHistoryModal
          setModalOpen={setModalOpen}
          applicantInfo={applicantInfo}
          setIsConfirmModalOpen={setIsAlertOpen}
        />
      )}
      {isAlertOpen && (
        <SelectCompleteAlert
          checkedIdCount={checkedIdArr.length}
          setIsAlertOpen={setIsAlertOpen}
          isChosen={isChosen}
          fetchApplicantList={fetchApplicantList}
          fetchChosenReviewerList={fetchChosenReviewerList}
          resetCheckedStatus={resetCheckedStatus}
        />
      )}
    </>
  );
};

export default ReviewerList;
