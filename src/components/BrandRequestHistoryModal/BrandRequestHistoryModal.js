import './BrandRequestHistoryModal.scss';
import Close from './../../assets/close.svg';

const BrandRequestHistoryModal = ({ setModalOpen }) => {
  return (
    <div className="overlay">
      <div className="modal-container">
        <button
          className="close-button"
          onClick={() => setModalOpen(prev => !prev)}
        >
          <img src={Close} alt="모달 닫기" />
        </button>
        <h2 className="modal_title">
          김아무개(뽀또)님
          <br />내 브랜드 참여 횟수
        </h2>
        <p>총 2회</p>
        <div>
          <ul>
            <li>프로젝트</li>
            <li>제출 결과물</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandRequestHistoryModal;
