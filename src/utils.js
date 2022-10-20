export const getProjectInfo = () => {
  const data = fetch('http://localhost:9000/project')
    .then(res => {
      if (!res.ok) {
        throw new Error(`예기치 않은 오류가 발생했습니다. ${res.status}`);
      }
      return res.json();
    })
    .then(data => data);
  return data;
};

export const getReviewerListData = () => {
  const data = fetch('http://localhost:9000/projectRequests')
    .then(res => {
      if (!res.ok) {
        throw new Error(`예기치 않은 오류가 발생했습니다. ${res.status}`);
      }
      return res.json();
    })
    .then(data => data);
  return data;
};
