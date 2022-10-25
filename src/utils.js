import axios from 'axios';
import { BASE_URL } from './api';

export const updateIsChosenStatus = (id, isChosenStatus) => {
  axios
    .patch(`${BASE_URL}/projectRequests/${id}`, {
      isChosen: !isChosenStatus,
    })
    .catch(err => console.error(err.message));
};

export const updateBookmarkStatus = (id, isBookmarkStatus) => {
  axios
    .patch(`${BASE_URL}/projectRequests/${id}`, {
      isBookmark: !isBookmarkStatus,
    })
    .catch(err => console.error(err.message));
};
