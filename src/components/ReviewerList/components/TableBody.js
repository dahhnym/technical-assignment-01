import ArrowRight from './../../../assets/arrow-right.svg';
import NotStarred from './../../../assets/not-starred.svg';
import Starred from './../../../assets/starred.svg';
import { useState } from 'react';
import { updateBookmarkStatus } from '../../../utils';

const TableBody = ({
  reviewerData,
  checkedIdArr,
  setCheckedIdArr,
  setCheckedId,
  fetchApplicantList,
  fetchChosenReviewerList,
  setModalOpen,
  setApplicantInfo,
  isChosen,
}) => {
  const [selectedId, setSelectedId] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckBoxClick = e => {
    const clickedElemValue = Number(e.target.value);
    const isExistedId = checkedIdArr.includes(clickedElemValue);
    if (isExistedId) {
      const filteredArr = checkedIdArr.filter(
        checkedId => checkedId !== clickedElemValue,
      );
      setCheckedIdArr(filteredArr);
    }
    checkedIdArr.push(clickedElemValue);
    setCheckedId(clickedElemValue);
  };

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  const handleDropdownOpenClick = e => {
    const clickedElemValue = Number(e.target.value);
    setSelectedId(clickedElemValue);
    toggleDropdown();
  };

  const handleBookmarkClick = (id, isBookmarkStatus) => {
    updateBookmarkStatus(id, isBookmarkStatus);
    fetchApplicantList();
    fetchChosenReviewerList();
  };

  const handleBrandRequestHistoryClick = (id, name, nickname, isChosen) => {
    setModalOpen(prev => !prev);
    setApplicantInfo({ id, name, nickname, isChosen });
  };

  return (
    <ul className="table-body-container">
      {reviewerData.length !== 0 ? (
        reviewerData.map((data, idx) => {
          const isChecked = checkedIdArr.includes(data.id);
          return (
            <li
              key={idx}
              className={`table-body-row ${
                isChecked ? 'table-body-row_checked' : ''
              }`}
            >
              <div>
                <input
                  className="table-body-row_checkbox"
                  type="checkbox"
                  value={data.id}
                  checked={isChecked}
                  onChange={e => handleCheckBoxClick(e)}
                />
              </div>
              <div>
                <button
                  href="#"
                  onClick={() => handleBookmarkClick(data.id, data.isBookmark)}
                >
                  {data.isBookmark ? (
                    <img src={Starred} alt="북마크 설정됨" />
                  ) : (
                    <img src={NotStarred} alt="북마크 설정 안 됨" />
                  )}
                </button>
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
                    <>
                      <button
                        className={`button-dropdown ${
                          selectedId === data.id && isDropdownOpen
                            ? 'close'
                            : 'open'
                        }`}
                        value={data.id}
                        onClick={e => handleDropdownOpenClick(e)}
                      ></button>
                    </>
                  )}
                  {selectedId === data.id && isDropdownOpen ? (
                    <div
                      className={`table-body-row_message-box-dropdown ${
                        isDropdownOpen ? 'visible' : ''
                      }`}
                    >
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
                        data.isChosen,
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
        })
      ) : (
        <p className="table-body_no-content">
          {isChosen ? '선정' : '신청'} 리뷰어가 없습니다.
        </p>
      )}
    </ul>
  );
};

export default TableBody;
