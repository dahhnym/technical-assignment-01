import './BrandRequestHistoryModal.scss';
import { useEffect, useState } from 'react';
import { getBrandRequestHistory } from '../../api';
import CloseButton from './components/CloseButton';
import ConfirmButton from './components/ConfirmButton';
import TableBody from './components/TableBody';
import TableHeader from './components/TableHeader';

const BrandRequestHistoryModal = ({
  setModalOpen,
  applicantInfo,
  setIsConfirmModalOpen,
}) => {
  const [brandRequestHistoryData, setbrandRequestHistoryData] = useState();
  const { id, name, nickName, isChosen } = applicantInfo;
  const fetchBrandRequestHistory = async () => {
    const result = await getBrandRequestHistory(id);
    const historyData = result[0].list;
    setbrandRequestHistoryData(historyData);
  };

  useEffect(() => {
    fetchBrandRequestHistory();
  }, []);

  return (
    <div className="overlay">
      <div className="modal-container">
        <div>
          <CloseButton setModalOpen={setModalOpen} />
          <h2 className="modal-title">
            {name}({nickName})님
            <br />내 브랜드 참여 횟수
          </h2>
        </div>
        <p className="number-of-request">
          {brandRequestHistoryData?.length &&
            `총 ${brandRequestHistoryData.length}회`}
        </p>
        <div>
          <TableHeader />
          <TableBody brandRequestHistoryData={brandRequestHistoryData} />
        </div>
        <ConfirmButton
          id={id}
          isChosen={isChosen}
          setIsConfirmModalOpen={setIsConfirmModalOpen}
          setModalOpen={setModalOpen}
        />
      </div>
    </div>
  );
};

export default BrandRequestHistoryModal;
