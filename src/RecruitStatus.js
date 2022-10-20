import Logo from './assets/logo.svg';
import './RecruitStatus.scss';
import ReviewerList from './ReviewerList';

const RecruitStatus = () => {
  const projectId = '12345';
  const numberOfReviewer = 10;
  const selectedReviewer = 0;

  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={Logo} alt="리뷰쉐어" />
        <p>모집현황 | 프로젝트 번호: {projectId}</p>
      </header>
      <div className="reviewer-board-wrapper">
        <ul className="tab-container">
          <li className="tab">신청 리뷰어 &#40;{numberOfReviewer}&#41;</li>
          <li className="tab">선정 리뷰어&#40;{selectedReviewer}&#41;</li>
        </ul>
        <div className="reviewer-list-container">
          {/* 열 15개 */}
          <ReviewerList />
          <button className="submit-button">선정하기</button>
        </div>
      </div>
    </div>
  );
};

export default RecruitStatus;
