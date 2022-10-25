import axios from 'axios';

export const BASE_URL = 'http://localhost:9000';

export const getProjectInfo = () => {
  return axios
    .get(`${BASE_URL}/project`)
    .then(res => res.data)
    .catch(err => {
      if (err.response) {
        const { status } = err.response;
        if (status === 404) {
          console.error(`Error: ${status} Invalid url`);
        }
        if (status === 500) {
          console.error(`Error: ${status} Server error`);
        }
      } else {
        console.log('Error', err.message);
      }
    });
};

export const getApplicantData = () => {
  return axios
    .get(`${BASE_URL}/projectRequests?isChosen=false`)
    .then(res => res.data)
    .catch(err => {
      if (err.response) {
        const { status } = err.response;
        if (status === 404) {
          console.error(`Error: ${status} Invalid url`);
          return status;
        }
        if (status === 500) {
          return status;
        }
      } else {
        console.log('Error', err.message);
      }
    });
};

export const getBrandRequestHistory = userId => {
  return axios
    .get(`${BASE_URL}/brandRequestsHistory?userId=${userId}`)
    .then(res => res.data)
    .catch(err => {
      if (err.response) {
        const { status } = err.response;
        if (status === 404) {
          console.error(`Error: ${status} Invalid url`);
        }
        if (status === 500) {
          console.error(`Error: ${status} Server error`);
        }
      } else {
        console.log('Error', err.message);
      }
    });
};

export const getChosenReviewerData = () => {
  return axios
    .get(`${BASE_URL}/projectRequests?isChosen=true`)
    .then(res => res.data)
    .catch(err => {
      if (err.response) {
        const { status } = err.response;
        if (status === 404) {
          console.error(`Error: ${status} Invalid url`);
          return status;
        }
        if (status === 500) {
          console.error(`Error: ${status} Server error`);
          return status;
        }
      } else {
        console.log('Error', err.message);
      }
    });
};
