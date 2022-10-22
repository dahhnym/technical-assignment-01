import './BrandRequestHistoryModal.scss';
import Close from './../../assets/close.svg';
import { useEffect, useState } from 'react';
import { getBrandRequestHistory } from '../../utils';
import NaverBlog from './../../assets/naver-blog-icon.svg';
import Instagram from './../../assets/instagram-icon.svg';

const BrandRequestHistoryModal = ({ setModalOpen, reviewerInfo }) => {
  const [brandRequestHistoryData, setbrandRequestHistoryData] = useState();
  const { id, name, nickname } = reviewerInfo;

  useEffect(() => {
    const fetchBrandRequestHistory = async () => {
      const result = await getBrandRequestHistory(id);
      const historyData = result[0].list;
      setbrandRequestHistoryData(historyData);
    };

    fetchBrandRequestHistory();
  }, []);

  return (
    <div className="overlay">
      <div className="modal-container">
        <button
          className="close-button"
          onClick={() => setModalOpen(prev => !prev)}
        >
          <img src={Close} alt="모달 닫기" />
        </button>
        <h2 className="modal-title">
          {name}({nickname})님
          <br />내 브랜드 참여 횟수
        </h2>
        <p className="number-of-request">
          {brandRequestHistoryData?.length &&
            `총 ${brandRequestHistoryData.length}회`}
        </p>
        <div>
          <ul className="table-header-container modal-table">
            <li className="table-header-cell modal-table_header">프로젝트</li>
            <li className="table-header-cell modal-table_header">
              제출 결과물
            </li>
          </ul>
          <ul className="table-body-container">
            {brandRequestHistoryData &&
              brandRequestHistoryData.map((data, idx) => {
                const { reviewUrl, sns, title } = data;
                return (
                  <li key={idx} className="table-body-row modal-table_body-row">
                    <p className="modal-table_body-col-1">
                      {sns === 'NaverBlog' && (
                        <img
                          src={NaverBlog}
                          alt="네이버블로그"
                          className="sns-icon"
                        />
                      )}
                      {sns === 'Instagram' && (
                        <img
                          src={Instagram}
                          alt="인스타그램"
                          className="sns-icon"
                        />
                      )}
                      {title}
                    </p>
                    <div>
                      {reviewUrl ? (
                        <button>
                          <a href={reviewUrl} target="_blank" rel="noreferrer">
                            보기
                          </a>
                        </button>
                      ) : (
                        <button disabled>미제출</button>
                      )}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandRequestHistoryModal;
