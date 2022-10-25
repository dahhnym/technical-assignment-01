import ArrowUpDown from './../../../assets/arrow-updown.svg';
import { tableHeaderItems } from '../../../constant';

const TableHeader = () => {
  return (
    <ul className="table-header-container">
      <li className="table-header-cell">
        <input type="checkbox" />
      </li>
      {tableHeaderItems.map((item, idx) => (
        <li className="table-header-cell" key={idx}>
          {item}
          {idx === 1 && (
            <img src={ArrowUpDown} alt="정렬" style={{ marginLeft: '5px' }} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TableHeader;
