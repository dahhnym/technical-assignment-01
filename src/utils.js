const BASE_URL = 'http://localhost:9000';

export const getProjectInfo = () => {
  const data = fetch(`${BASE_URL}/project`).then(res => {
    if (!res.ok) {
      throw new Error(`예기치 않은 오류가 발생했습니다. ${res.status}`);
    }
    return res.json();
  });
  return data;
};

export const getApplicantData = () => {
  const data = fetch(`${BASE_URL}/projectRequests?isChosen=false`).then(res => {
    if (!res.ok) {
      throw new Error(`예기치 않은 오류가 발생했습니다. ${res.status}`);
    }
    return res.json();
  });
  return data;
};

export const getBrandRequestHistory = userId => {
  const data = fetch(`${BASE_URL}/brandRequestsHistory?userId=${userId}`).then(
    res => {
      if (!res.ok) {
        throw new Error(`예기치 않은 오류가 발생했습니다. ${res.status}`);
      }
      return res.json();
    },
  );
  return data;
};

export const getChosenReviewerData = () => {
  const data = fetch(`${BASE_URL}/projectRequests?isChosen=true`).then(res => {
    if (!res.ok) {
      throw new Error(`예기치 않은 오류가 발생했습니다. ${res.status}`);
    }
    return res.json();
  });
  return data;
};

export const updateIsChosenStatus = (id, isChosenStatus) => {
  fetch(`${BASE_URL}/projectRequests/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ isChosen: !isChosenStatus }),
  })
    .then(res => {
      console.log('PATCH result', res.status);
      return res.status;
    })
    .catch(error => console.error(error));
};
