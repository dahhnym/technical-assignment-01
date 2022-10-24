import Logo from './../../assets/logo.svg';
import './RecruitStatus.scss';
import ReviewerList from '../ReviewerList/ReviewerList';
import { useEffect, useState } from 'react';
import {
  getProjectInfo,
  getApplicantData,
  getChosenReviewerData,
} from '../../utils';

const RecruitStatus = () => {
  const [projectInfo, setProjectInfo] = useState(0);
  const [applicantData, setApplicantData] = useState('');
  const [chosenReviewerData, setChosenReviewerData] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleTabClick = e => {
    const clickedTabIndex = e.target.value;
    setTabIndex(clickedTabIndex);
  };

  useEffect(() => {
    const fetchProjectInfo = async () => {
      const info = await getProjectInfo();
      if (info) {
        setProjectInfo(info);
      }
    };
    const fetchApplicantList = async () => {
      const data = await getApplicantData();
      if (data) {
        setApplicantData(data);
      }
    };
    const fetchChosenReviewerList = async () => {
      const data = await getChosenReviewerData();
      if (data) {
        setChosenReviewerData(data);
      }
    };

    fetchApplicantList();
    fetchProjectInfo();
    fetchChosenReviewerList();
  }, []);

  const loadingMessage = '데이터를 불러오는 중입니다...';

  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={Logo} alt="리뷰쉐어" />
        <h1>모집현황 | 프로젝트 번호: {projectInfo ? projectInfo.id : ''}</h1>
      </header>
      <section className="reviewer-board-wrapper">
        <ul className="tab-container">
          <li
            className={`tab ${tabIndex === 0 ? 'tab_active' : ''}`}
            value="0"
            onClick={e => handleTabClick(e)}
          >
            신청 리뷰어 &#40;{applicantData.length}&#41;
          </li>
          <li
            className={`tab ${tabIndex === 1 ? 'tab_active' : ''}`}
            value="1"
            onClick={e => handleTabClick(e)}
          >
            선정 리뷰어({chosenReviewerData.length})
          </li>
        </ul>
        <div className="reviewer-list-container">
          {tabIndex === 0 &&
            (applicantData ? (
              <ReviewerList
                applicantData={applicantData}
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
                maxRecruits={projectInfo.recruits}
              />
            ) : (
              loadingMessage
            ))}
          {tabIndex === 1 &&
            (chosenReviewerData ? (
              <ReviewerList
                chosenReviewerData={chosenReviewerData}
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
                maxRecruits={projectInfo.recruits}
              />
            ) : (
              loadingMessage
            ))}
        </div>
      </section>
    </div>
  );
};

export default RecruitStatus;
