import './RecruitStatus.scss';
import ReviewerList from '../ReviewerList/ReviewerList';
import { useEffect, useState } from 'react';
import {
  getProjectInfo,
  getApplicantData,
  getChosenReviewerData,
} from '../../api';
import Tabs from './components/Tabs';
import Header from './components/Header';

const RecruitStatus = () => {
  const [projectInfo, setProjectInfo] = useState(0);
  const [applicantData, setApplicantData] = useState('');
  const [chosenReviewerData, setChosenReviewerData] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const loadingMessage = '데이터를 불러오는 중입니다...';
  const [message, setMessage] = useState(loadingMessage);

  const setErrorMessage = errorCode =>
    setMessage(`데이터를 불러올 수 없습니다. Error code: ${errorCode}`);

  const fetchProjectInfo = async () => {
    const info = await getProjectInfo();
    if (info) {
      setProjectInfo(info);
    }
  };

  const fetchApplicantList = async () => {
    const data = await getApplicantData();
    if (typeof data === 'number') {
      setErrorMessage(data);
    } else {
      setApplicantData(data);
    }
  };

  const fetchChosenReviewerList = async () => {
    const data = await getChosenReviewerData();
    if (typeof data === 'number') {
      setErrorMessage(data);
    } else {
      setChosenReviewerData(data);
    }
  };

  useEffect(() => {
    fetchApplicantList();
    fetchProjectInfo();
    fetchChosenReviewerList();
  }, []);

  return (
    <>
      <Header projectInfo={projectInfo} />
      <div className="reviewer-board-wrapper">
        <Tabs
          setTabIndex={setTabIndex}
          tabIndex={tabIndex}
          applicantData={applicantData}
          chosenReviewerData={chosenReviewerData}
        />
        <section className="reviewer-list-container">
          {/* 신청 리뷰어 리스트 */}
          {tabIndex === 0 &&
            (applicantData ? (
              <ReviewerList
                applicantData={applicantData}
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
                maxRecruits={projectInfo.recruits}
                fetchApplicantList={fetchApplicantList}
                fetchChosenReviewerList={fetchChosenReviewerList}
              />
            ) : (
              message
            ))}
          {/* 선정 리뷰어 리스트 */}
          {tabIndex === 1 &&
            (chosenReviewerData ? (
              <ReviewerList
                chosenReviewerData={chosenReviewerData}
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
                maxRecruits={projectInfo.recruits}
                fetchApplicantList={fetchApplicantList}
                fetchChosenReviewerList={fetchChosenReviewerList}
              />
            ) : (
              message
            ))}
        </section>
      </div>
    </>
  );
};

export default RecruitStatus;
