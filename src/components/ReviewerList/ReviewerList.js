import { useEffect, useState } from 'react';
import './ReviewerList.scss';
import { getReviewerListData } from '../../utils';
import Star from './../../assets/star.svg';
import ArrowRight from './../../assets/arrow-right.svg';
import { Link } from 'react-router-dom';

const ReviewerList = ({ reviewerData, setModalOpen }) => {
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

  const [clicked, setClicked] = useState(false);

  const onCheckBoxClick = e => {
    console.log(e.target.value);
  };

  const onBrandRequestHistoryClick = ({ setModalOpen }) => {
    console.log('clicked!');
  };

  return (
    <div className="reviewer-list">
      <div className="table-header-container">
        <div className="table-header-cell check">
          <input type="checkbox" />
        </div>
        {tableHeaderItems.map((item, idx) => (
          <div className="table-header-cell" key={idx}>
            {item}
          </div>
        ))}
      </div>
      {reviewerData ? (
        <div className="table-body-container">
          {reviewerData.map((data, idx) => {
            return (
              <div key={idx} className="table-body-row">
                <div>
                  <input
                    type="checkbox"
                    value={data.id}
                    onClick={onCheckBoxClick}
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
                    <div className="table-body-row_message-box-dropdown">
                      {data.message}
                    </div>
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
                      onClick={() => setModalOpen(prev => !prev)}
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
              </div>
            );
          })}
        </div>
      ) : (
        <p>리뷰어가 없습니다.</p>
      )}
    </div>
  );
};

export default ReviewerList;
