import Logo from './../../../assets/logo.svg';

const Header = ({ projectInfo }) => {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="리뷰쉐어" />
      <h1>모집현황 | 프로젝트 번호: {projectInfo ? projectInfo.id : ''}</h1>
    </header>
  );
};

export default Header;
