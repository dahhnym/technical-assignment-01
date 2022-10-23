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
        <div>
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
        </div>
        <p className="number-of-request">
          {brandRequestHistoryData?.length &&
            `총 ${brandRequestHistoryData.length}회`}
        </p>
        <div>
          <ul className="modal_table-header-container">
            <li className="modal_table-header-cell">프로젝트</li>
            <li className="modal_table-header-cell">제출 결과물</li>
          </ul>
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
                        <img
                          src={Instagram}
                          alt="인스타그램"
                          className="sns-icon"
                        />
                      )}
                      {title}
                    </div>
                    <div className="modal_table-body-col-2">
                      <button
                        className={
                          reviewUrl !== null
                            ? 'modal-button-active-white'
                            : 'modal-button-inactive'
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
        </div>
        <button className="modal-button-active-blue">선정하기</button>
      </div>
    </div>
  );
};

export default BrandRequestHistoryModal;
