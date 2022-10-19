import Logo from "./assets/logo.svg";

const RecruitStatus = () => {
  const projectId = "12345";

  return (
    <div className='App'>
      <header class='header'>
        <img src={Logo} alt='리뷰쉐어' />
        <p>모집현황 | 프로젝트 번호: {projectId}</p>
      </header>
    </div>
  );
};

export default RecruitStatus;
