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

export const getReviewerData = () => {
  const data = fetch(`${BASE_URL}/projectRequests`).then(res => {
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
