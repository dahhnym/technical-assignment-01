import Logo from './../../assets/logo.svg';
import './RecruitStatus.scss';
import ReviewerList from '../ReviewerList/ReviewerList';
import { useEffect, useState } from 'react';
import { getProjectInfo, getReviewerListData } from '../../utils';

const RecruitStatus = () => {
  const numberOfReviewer = 10;
  const selectedReviewer = 0;

  const [projectId, setProjectId] = useState(0);
  const [reviewerData, setData] = useState('');

  useEffect(() => {
    const fetchProjectInfo = async () => {
      const info = await getProjectInfo();
      if (info) {
        setProjectId(info);
      }
    };
    const fetchReviewerData = async () => {
      const result = await getReviewerListData();
      if (result) {
        setData(result);
      }
    };
    fetchReviewerData();
    fetchProjectInfo();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={Logo} alt="리뷰쉐어" />
        <p>모집현황 | 프로젝트 번호: {projectId ? projectId.id : ''}</p>
      </header>
      <div className="reviewer-board-wrapper">
        <ul className="tab-container">
          <li className="tab">신청 리뷰어 &#40;{reviewerData.length}&#41;</li>
          <li className="tab">선정 리뷰어&#40;{selectedReviewer}&#41;</li>
        </ul>
        <div className="reviewer-list-container">
          <ReviewerList reviewerData={reviewerData} />
          <button className="submit-button">선정하기</button>
        </div>
      </div>
    </div>
  );
};

export default RecruitStatus;
