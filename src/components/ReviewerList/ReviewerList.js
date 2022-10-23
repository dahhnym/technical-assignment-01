import { useEffect, useState } from 'react';
import './ReviewerList.scss';
import Star from './../../assets/star.svg';
import ArrowRight from './../../assets/arrow-right.svg';
import BrandRequestHistoryModal from '../BrandRequestHistoryModal/BrandRequestHistoryModal';

const ReviewerList = ({
  reviewerData,
  setModalOpen,
  modalOpen,
  maxRecruits,
}) => {
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

  const [reviewerInfo, setReviewerInfo] = useState({});
  const [selectedId, setSelectedId] = useState(0);
  const [checkedId, setCheckedId] = useState(0);
  const [checkedIdArr, setCheckedIdArr] = useState([]);

  useEffect(() => {}, [checkedIdArr, checkedId]);

  const handleDropdownOpenClick = e => {
    console.log(e.target.value);
    setSelectedId(e.target.value);
  };

  const handleCheckBoxClick = e => {
    const isExistedId = checkedIdArr.includes(e.target.value);
    if (isExistedId) {
      const filteredArr = checkedIdArr.filter(
        checkedId => checkedId !== e.target.value,
      );
      setCheckedIdArr(filteredArr);
    }
    checkedIdArr.push(e.target.value);
    setCheckedId(e.target.value);
  };

  console.log('체크 리뷰어 목록', checkedIdArr);

  const handleBrandRequestHistoryClick = (id, name, nickname) => {
    setModalOpen(prev => !prev);
    setReviewerInfo({ id, name, nickname });
  };

  return (
    <>
      <div className="reviewer-list">
        <ul className="table-header-container">
          <li className="table-header-cell check">
            <input type="checkbox" />
          </li>
          {tableHeaderItems.map((item, idx) => (
            <li className="table-header-cell" key={idx}>
              {item}
            </li>
          ))}
        </ul>
        {reviewerData ? (
          <ul className="table-body-container">
            {reviewerData.map((data, idx) => {
              return (
                <li key={idx} className={`table-body-row`}>
                  <div>
                    <input
                      className="table-body-row_checkbox"
                      type="checkbox"
                      value={data.id}
                      onClick={e => handleCheckBoxClick(e)}
                    />
                  </div>
                  <div>
                    {data.isBookmark ? (
                      '★'
                    ) : (
                      <a href="#">
                        <img src={Star} alt="즐겨찾기" />
                      </a>
                    )}
                  </div>
                  <div>{data.id}</div>
                  <div>
                    {data.grade === 'a' && '화이트'}
                    {data.grade === 'b' && '실버'}
                    {data.grade === 'c' && '골드'}
                    {data.grade === 'd' && '다이아'}
                    {data.grade === 'z' && '블랙'}
                  </div>
                  <div>{`${data.name}(${data.nickName})`}</div>
                  <div>{new Date().getFullYear() - data.yearOfBirth}</div>
                  <div>{data.gender === 'Female' ? '여' : '남'}</div>
                  <div>{data.region}</div>
                  <div>{data.category}</div>
                  <div className="table-body-row_message">
                    <div className="message-box">
                      {data.message ? (
                        <p className="table-body-row_message-valid">
                          {data.message}
                        </p>
                      ) : (
                        <span className="table-body-row_message-invalid">
                          내용이 없습니다.
                        </span>
                      )}
                      {data.message.length > 34 && (
                        <button
                          className="button-dropdown open"
                          value={data.id}
                          onClick={e => handleDropdownOpenClick(e)}
                        ></button>
                      )}
                      {selectedId === data.id ? (
                        <div className="table-body-row_message-box-dropdown">
                          {data.message}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div>{data.recommend}회</div>
                  <div>{data.cancelRate}%</div>
                  <div>{data.today.toLocaleString()}</div>
                  <div>
                    <a
                      href={data.snsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-view-sns"
                    >
                      보기
                    </a>
                  </div>
                  <div>
                    {data.brandRequestCounts === 0 ? (
                      '-'
                    ) : (
                      <button
                        className={
                          data.brandRequestCounts !== 0
                            ? 'table-body-row_count-valid'
                            : ''
                        }
                        onClick={() =>
                          handleBrandRequestHistoryClick(
                            data.id,
                            data.name,
                            data.nickName,
                          )
                        }
                      >
                        {data.brandRequestCounts}회
                        <img
                          src={ArrowRight}
                          alt=""
                          style={{ marginLeft: '0.3rem' }}
                        />
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>리뷰어가 없습니다.</p>
        )}
      </div>
      <button
        className={
          checkedIdArr.length > 0 && checkedIdArr.length <= maxRecruits
            ? 'button-active'
            : 'button-inactive'
        }
      >
        {checkedIdArr.length ? `${checkedIdArr.length}명` : ''} 선정하기
      </button>
      {modalOpen && (
        <BrandRequestHistoryModal
          setModalOpen={setModalOpen}
          reviewerInfo={reviewerInfo}
        />
      )}
    </>
  );
};

export default ReviewerList;
