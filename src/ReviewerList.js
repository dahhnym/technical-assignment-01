const ReviewerList = () => {
  const tableHeaderItems = [
    '별표',
    'NO',
    '등급',
    '이름(닉네임)',
    '나이',
    '성별',
    '지역',
    '활동분야',
    '전략',
    '추천수',
    '취소율',
    '평균 투데이',
    'SNS 계정',
    '내 브랜드 참여',
  ];

  return (
    <div className="reviewer-list">
      <div className="table-header-container">
        <div className="table-header-cell check">
          <input type="checkbox" />
        </div>
        {tableHeaderItems.map(item => (
          <div className="table-header-cell">{item}</div>
        ))}
      </div>
      <div>여기는 리뷰어 리스트가 들어갑니다.</div>
      {/* <div>별표</div>
      <div>NO</div>
      <div>등급</div>
      <div>이름(닉네임)</div>
      <div>나이</div>
      <div>성별</div>
      <div>지역</div>
      <div>활동분야</div>
      <div>전략</div>
      <div>추천수</div>
      <div>취소율</div>
      <div>평균 투데이</div>
      <div>SNS 계정</div>
      <div>내 브랜드 참여</div> */}
    </div>
  );
};

export default ReviewerList;
