const Tabs = ({ setTabIndex, tabIndex, applicantData, chosenReviewerData }) => {
  const handleTabClick = e => {
    const clickedTabIndex = e.target.value;
    setTabIndex(clickedTabIndex);
  };
  return (
    <ul className="tab-container">
      <li
        className={`tab ${tabIndex === 0 ? 'tab_active' : ''}`}
        value="0"
        onClick={e => handleTabClick(e)}
      >
        신청 리뷰어 &#40;{applicantData?.length}&#41;
      </li>
      <li
        className={`tab ${tabIndex === 1 ? 'tab_active' : ''}`}
        value="1"
        onClick={e => handleTabClick(e)}
      >
        선정 리뷰어({chosenReviewerData?.length})
      </li>
    </ul>
  );
};

export default Tabs;
