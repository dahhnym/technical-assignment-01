import Logo from './../../assets/logo.svg';
import './RecruitStatus.scss';
import ReviewerList from '../ReviewerList/ReviewerList';
import { useEffect, useState } from 'react';
import { getProjectInfo, getReviewerData } from '../../utils';

const RecruitStatus = () => {
  const selectedReviewer = 0;

  const [projectId, setProjectId] = useState(0);
  const [reviewerData, setData] = useState('');
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
        setProjectId(info);
      }
    };
    const fetchReviewerList = async () => {
      const data = await getReviewerData();
      if (data) {
        setData(data);
      }
    };

    fetchReviewerList();
    fetchProjectInfo();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={Logo} alt="리뷰쉐어" />
        <h1>모집현황 | 프로젝트 번호: {projectId ? projectId.id : ''}</h1>
      </header>
      <section className="reviewer-board-wrapper">
        <ul className="tab-container">
          <li
            className={`tab ${tabIndex === 0 ? 'tab_active' : ''}`}
            value="0"
            onClick={e => handleTabClick(e)}
          >
            신청 리뷰어 &#40;{reviewerData.length}&#41;
          </li>
          <li
            className={`tab ${tabIndex === 1 ? 'tab_active' : ''}`}
            value="1"
            onClick={e => handleTabClick(e)}
          >
            선정 리뷰어&#40;{selectedReviewer}&#41;
          </li>
        </ul>
        <div className="reviewer-list-container">
          {tabIndex === 0 && (
            <>
              <ReviewerList
                reviewerData={reviewerData}
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
              />
              <button className="button-inactive">선정하기</button>
            </>
          )}
          {tabIndex === 1 && (
            <p className="reviewer-list_no-reviewer">선정 리뷰어가 없습니다.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default RecruitStatus;
