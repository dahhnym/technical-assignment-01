import Logo from "./assets/logo.svg";

const RecruitStatus = () => {
  const projectId = "12345";

  return (
    <div className='App'>
      <header className='header'>
        <img src={Logo} alt='리뷰쉐어' />
        <p>모집현황 | 프로젝트 번호: {projectId}</p>
      </header>
      <div className='tabContainer'>
        <ul>
          <li>신청 리뷰어</li>
          <li>선정 리뷰어</li>
        </ul>
      </div>
    </div>
  );
};

export default RecruitStatus;
