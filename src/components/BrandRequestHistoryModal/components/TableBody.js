import NaverBlog from './../../../assets/naver-blog-icon.svg';
import Instagram from './../../../assets/instagram-icon.svg';

const TableBody = ({ brandRequestHistoryData }) => {
  return (
    <ul className="modal_table-body-container">
      {brandRequestHistoryData &&
        brandRequestHistoryData.map((data, idx) => {
          const { reviewUrl, sns, title } = data;
          return (
            <li key={idx} className="modal_table-body-row">
              <div className="modal_table-body-col-1">
                {sns === 'NaverBlog' && (
                  <img
                    src={NaverBlog}
                    alt="네이버블로그"
                    className="sns-icon"
                  />
                )}
                {sns === 'Instagram' && (
                  <img src={Instagram} alt="인스타그램" className="sns-icon" />
                )}
                {title}
              </div>
              <div className="modal_table-body-col-2">
                <button
                  className={
                    reviewUrl !== null
                      ? 'modal-view-button active-white'
                      : 'modal-view-button inactive'
                  }
                >
                  <a href={reviewUrl} target="_blank" rel="noreferrer">
                    {reviewUrl !== null ? '보기' : '미제출'}
                  </a>
                </button>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default TableBody;
