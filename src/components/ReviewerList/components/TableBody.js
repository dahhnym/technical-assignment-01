import ApplicantMessage from './ApplicantMessage';
import BookmarkButton from './BookrmarkButton';
import ViewBrandRequestHistoryButton from './ViewBrandRequestHistoryButton';

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

  return (
    <ul className="table-body-container">
      {reviewerData.length !== 0 ? (
        reviewerData.map((data, idx) => {
          const {
            id,
            name,
            nickName,
            gender,
            yearOfBirth,
            region,
            category,
            grade,
            recommend,
            cancelRate,
            today,
            snsUrl,
            brandRequestCounts,
            isChosen,
            isBookmark,
            message,
          } = data;
          const isChecked = checkedIdArr.includes(id);
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
                  value={id}
                  checked={isChecked}
                  onChange={e => handleCheckBoxClick(e)}
                />
              </div>
              <div>
                <BookmarkButton
                  fetchApplicantList={fetchApplicantList}
                  fetchChosenReviewerList={fetchChosenReviewerList}
                  id={id}
                  isBookmark={isBookmark}
                />
              </div>
              <div>{id}</div>
              <div>
                {grade === 'a' && '?????????'}
                {grade === 'b' && '??????'}
                {grade === 'c' && '??????'}
                {grade === 'd' && '?????????'}
                {grade === 'z' && '??????'}
              </div>
              <div>{`${name}(${nickName})`}</div>
              <div>{new Date().getFullYear() - yearOfBirth}</div>
              <div>{gender === 'Female' ? '???' : '???'}</div>
              <div>{region}</div>
              <div>{category}</div>
              <div className="table-body-row_message">
                <ApplicantMessage message={message} id={id} />
              </div>
              <div>{recommend}???</div>
              <div>{cancelRate}%</div>
              <div>{today.toLocaleString()}</div>
              <div>
                <a
                  href={snsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-view-sns"
                >
                  ??????
                </a>
              </div>
              <div>
                {brandRequestCounts === 0 ? (
                  '-'
                ) : (
                  <ViewBrandRequestHistoryButton
                    setModalOpen={setModalOpen}
                    setApplicantInfo={setApplicantInfo}
                    id={id}
                    name={name}
                    nickName={nickName}
                    isChosen={isChosen}
                    brandRequestCounts={brandRequestCounts}
                  />
                )}
              </div>
            </li>
          );
        })
      ) : (
        <p className="table-body_no-content">
          {isChosen ? '??????' : '??????'} ???????????? ????????????.
        </p>
      )}
    </ul>
  );
};

export default TableBody;
