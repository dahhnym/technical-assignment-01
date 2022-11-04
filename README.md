# 리뷰쉐어 프론트엔드 기술과제

## 기간

2022.10.19 - 2022.10.26

## 기술스택

- React 18.2.0
- Node.js 16.13.1
- Sass
- json-server
- axios

## 프로젝트 실행방법

### 패키지 설치

```
$ npm install
```

### json-server 설치 및 서버 실행

```
$ npm i -g json-server
$ cd test-server
$ json-server -p 9000 db.json
```

### 프로젝트 실행

```
$ npm run start
```

## 접속 주소

http://localhost:3000/project

⚠️ 브라우저 크기 `1920 X 920` 에 최적화되어있습니다.

<br>

## 구현사항

- [x] 신청 리뷰어, 선정 리뷰어 탭별 해당 리스트 테이블 구현
- [x] 테이블의 첫째 행 고정
- [x] 아무도 체크하지 않았거나 프로젝트 선정 인원수를 초과하여 체크할 시 선정/취소 버튼 비활성화
- [x] 선정하기/선정취소 버튼에 체크한 리뷰어 수 표시
- [x] 1명 단위로 선정/선정 취소 기능
- [x] 내 브랜드 참여 내역 모달
- [x] 브랜드 참여 내역 모달에서 선정/선정 취소 기능
- [x] 리뷰 전략 드롭다운 구현
- [x] 북마크 기능

<br>

## 주요 기능 코드 설명

### 리뷰어 선정 및 취소

```js
// ReviewerList.js
const handleConfirmButtonClick = (id, isChosenStatus) => {
  const checkedCount = checkedIdArr.length; // 체크된 체크박수 갯수
  if (checkedCount > 0 && checkedCount <= maxRecruits) {
    // 체크된 갯수 1개 이상 프로젝트 선정인원수 이하일때
    updateIsChosenStatus(id, isChosenStatus);
    setIsConfirmModalOpen(prev => !prev);
  }
};
```

선정하기/선정취소 버튼을 클릭하면 `handleConfirmButtonClick` 함수가 호출되고 이때 클릭한 체크박스의 value(리뷰어의 id)와 체크한 해당 리뷰어의 isChosen 값을 넘겨줍니다.
조건 충족하는 경우 `updateIsChosenStatus` 함수를 호출하여 `isChosen` 상태를 업데이트하고 선택완료 Alert창을 띄웁니다.

```js
// utils.js
export const updateIsChosenStatus = (id, isChosenStatus) => {
  axios
    .patch(`${BASE_URL}/projectRequests/${id}`, {
      isChosen: !isChosenStatus,
    })
    .catch(err => console.error(err.message));
};
```

### 북마크 설정 및 해제

```js
// utils.js
export const updateBookmarkStatus = (id, isBookmarkStatus) => {
  axios
    .patch(`${BASE_URL}/projectRequests/${id}`, {
      isBookmark: !isBookmarkStatus,
    })
    .catch(err => console.error(err.message));
};
```

### 에러 처리

```js
// api.js
export const getApplicantData = () => {
  return axios
    .get(`${BASE_URL}/projectRequests?isChosen=false`)
    .then(res => res.data)
    .catch(err => {
      if (err.response) {
        const { status } = err.response;
        if (status === 404) {
          console.error(`Error: ${status} Invalid url`);
          return status; // status(에러코드) 반환
        }
        if (status === 500) {
          return status; // status(에러코드) 반환
        }
      } else {
        console.log('Error', err.message);
      }
    });
};
```

```js
// RecruitStatus.js

// 신청 리뷰어 리스트 가져오기
const fetchApplicantList = async () => {
  const data = await getApplicantData();
  if (typeof data === 'number') {
    // status(에러코드)를 반환 받은 경우
    setErrorMessage(data);
  } else {
    setApplicantData(data);
  }
};

// api 호출 후 상황에 따른 에러 메세지
const loadingMessage = '데이터를 불러오는 중입니다...';
const [message, setMessage] = useState(loadingMessage);

const setErrorMessage = errorCode =>
  setMessage(`데이터를 불러올 수 없습니다. Error code: ${errorCode}`);
```

```jsx
// RecruitStatus.js

/* .... */

<section className="reviewer-list-container">
  /* 신청 리뷰어 리스트 */
  {tabIndex === 0 &&
    (applicantData ? (
      <ReviewerList
        applicantData={applicantData}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        maxRecruits={projectInfo.recruits}
        fetchApplicantList={fetchApplicantList}
        fetchChosenReviewerList={fetchChosenReviewerList}
      />
    ) : (
      message
    ))}
  /* .... */
</section>
```
