import { useState } from 'react';

const ApplicantMessage = ({ message, id }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  const handleDropdownOpenClick = e => {
    const clickedElemValue = Number(e.target.value);
    setSelectedId(clickedElemValue);
    toggleDropdown();
  };

  return (
    <div className="message-box">
      {message ? (
        <p className="table-body-row_message-valid">{message}</p>
      ) : (
        <span className="table-body-row_message-invalid">내용이 없습니다.</span>
      )}
      {message.length > 34 && (
        <>
          <button
            className={`button-dropdown ${
              selectedId === id && isDropdownOpen ? 'close' : 'open'
            }`}
            value={id}
            onClick={e => handleDropdownOpenClick(e)}
          ></button>
        </>
      )}
      {selectedId === id && isDropdownOpen ? (
        <div
          className={`table-body-row_message-box-dropdown ${
            isDropdownOpen ? 'visible' : ''
          }`}
        >
          {message}
        </div>
      ) : null}
    </div>
  );
};

export default ApplicantMessage;
