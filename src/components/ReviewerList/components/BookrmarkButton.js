import NotStarred from './../../../assets/not-starred.svg';
import Starred from './../../../assets/starred.svg';
import { updateBookmarkStatus } from '../../../utils';

const BookmarkButton = ({
  fetchApplicantList,
  fetchChosenReviewerList,
  id,
  isBookmark,
}) => {
  const handleBookmarkClick = (id, isBookmarkStatus) => {
    updateBookmarkStatus(id, isBookmarkStatus);
    fetchApplicantList();
    fetchChosenReviewerList();
  };

  return (
    <button href="#" onClick={() => handleBookmarkClick(id, isBookmark)}>
      {isBookmark ? (
        <img src={Starred} alt="북마크 설정됨" />
      ) : (
        <img src={NotStarred} alt="북마크 설정 안 됨" />
      )}
    </button>
  );
};

export default BookmarkButton;
