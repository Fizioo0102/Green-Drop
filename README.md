# AI를 활용한 IoT 플라스틱컵 수거함🌏Green Drop🌏

# 📜 1. 프로젝트 개요
### 👑 SSAFY 9기 2학기 공통 프로젝트 - 최우수상(1위) 수상 👑

### 📅 개발기간

 2023년 7월 4일 ~ 8월 18일
 

### 💡 기획의도

 무더운 여름철 잦은 음료 취식으로 인하여 플라스틱 컵 사용량이 점점 증가하고 있지만, 정작 쓰레기를 버릴 때는 내용물을 비우지 않거나, 홀더 같은 것들이 분리배출되지 않아  **실제로 플라스틱 컵이 재활용되는 비율은 절반도 채 되지 않았습니다**.
 
 
 현재 우리 SSAFY 교육동을 보아도, 1층 카페 옆 플라스틱 전용 수거함이 있으나, 실제로는 종이 컵, 휴지, 커피 스틱 등이 함께버려져 분리배출이 제대로 되어있지 않거나, 강의  장 쓰레기통 같은 경우에도 일반쓰레기와 플라스틱 컵이 혼합되어 **제대로 분리배출이 되지 않고 있다는 것**을 알 수 있습니다.
 
 실제 연수원 사용자 54명을 대상으로 진행한 설문조사에서도 평소 플라스틱 컵을 강의실 뒤편에 가장 많이 버리며 복도, 화장실, 1층 카페 순으로 **정작 플라스틱 컵 전용 수거 함 인 1층 카페의 이용률은 가장 적은 것**을 알 수 있었습니다.
 
 다음과 같은 문제 상황 속에서 **플라스틱 컵 전용 수거함에 넛지 효과를 불러 일으키기위한 수단으로 밸런스 게임을 접목하여 사용자로 하여금 플라스틱 컵을 투표수단으로 사용하여 자연스럽게 분리배출**을 할 수 있도록 유도하는 프로젝트를 기획하였습니다.

# 👯 2. 팀원 소개
|김장호|이대건|이승현|조영헌|천원준|최경인|
|---|---|---|---|---|---|
|<img src="https://github.com/Fizioo0102/Green-Drop/assets/107913312/79ab9c9a-ed02-4d87-a608-57f353ea0f51" width="110">|<img src="https://avatars.githubusercontent.com/u/102503928?v=4" width="110">|<img src="https://avatars.githubusercontent.com/u/104187750?v=4" width="110">|<img src="https://avatars.githubusercontent.com/u/109343692?v=4" width="110">|<img src="https://avatars.githubusercontent.com/u/40604592?v=4" width="110">|<img src="https://avatars.githubusercontent.com/u/107913312?v=4" width="110">|
|[@KJH0406](https://github.com/KJH0406)|[@leedaegeon](https://github.com/leedaegeon)|[@leverest96](https://github.com/leverest96)|[@marine-doe](https://github.com/marine-doe)|[@wonjunchun](https://github.com/wonjunchun)|[@Fizioo0102](https://github.com/Fizioo0102)|
|FE / PM / Design |FE|FE / Infra(FE)|IoT / AI|BE / AI / DB|BE / Infra(BE) / DB|

# 💻 3. 기술 스택

### Communication

<img src="https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white">  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/mattermost-0058CC?style=for-the-badge&logo=mattermost&logoColor=white">

### Development-FE

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

<details>
<summary>버전 상세 정보</summary>
  
`React.js` : 18.2.0 <br/>
`Redux-toolkit` : 1.9.5 <br/>
`Node.js` : 18.16.1<br/>
`Axios` : 1.4.0 <br/>
`React-bootstrap` : 2.8.0 <br/>
`react-query` : 3.39.3 <br/>
`react-router-dom` : 6.14.1 <br/>
`react-apexcharts` : 1.4.1 <br/>
`react-calendar` : 4.6.0 <br/>
`react-slick` : 0.29.0 <br/>
`serialport` : 11.0.1 <br/> 
</details> 

### Development - BE

<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white">  <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">

<details>
<summary>버전 상세 정보</summary>

`Java` : openjdk : 17.0.7 <br/>
`Spring Boot` : 3.0.8  <br/>
`Spring Security` : 6.1.3 <br/>
`Gradle` : 7.6.1 <br/>
`MySQL` : 8.0.33 <br/>
`QueryDsl` : 5.0.0 <br/>
`JPA` : -  <br/>
`Hibernate` : -  <br/>
</details>

### Deploy

<img src="https://img.shields.io/badge/AmazonEC2-FF9900?style=for-the-badge&logo=AmazonEC2&logoColor=white"> <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"> <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"> <img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white"> <img src="https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white">

<details>
<summary>버전 상세 정보</summary>
  
`Ubuntu` : 20.04 LTS <br/>
`Jenkins` : 2.422 <br/>
`Docker` : 24.0.6 <br/>
</details> 

### AIoT

<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"> <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white"> <img src="https://img.shields.io/badge/Tensorflow-FF6F00?style=for-the-badge&logo=Tensorflow&logoColor=white"> <img src="https://img.shields.io/badge/arduino-00878F?style=for-the-badge&logo=arduino&logoColor=white"> <img src="https://img.shields.io/badge/openCV-5C3EE8?style=for-the-badge&logo=openCV&logoColor=white"> <img src="https://img.shields.io/badge/raspberryPI-A22846?style=for-the-badge&logo=raspberryPI&logoColor=white">  <img src="https://img.shields.io/badge/C++ -00599C?style=for-the-badge&logo=C++ &logoColor=white">

<details>
<summary>버전 상세 정보</summary>
  
`Python`  : 3.7.3 <br/>
`Tensorflow` : 2.4.0 <br/>
`OpenCV` : 47.1.0.25 <br/>
`Flask` : 2.37 <br/>
`Pycharm` : 10.1.4 <br/>
</details> 

# 📂 5. 화면 구성

- **FIGMA 와이어 프레임** 
 
![image](https://github.com/Fizioo0102/commonPJT-3/assets/107913312/5d0bd6e0-6a7b-4660-83bf-29648fcfe4a2)

- ** FIGMA 디자인 **
[![ㅇㄹㅇㄹ](https://github.com/Fizioo0102/Green-Drop/assets/107913312/a4be0540-6a55-41c3-bf0b-3e14d7dd6a56)](https://www.figma.com/file/m144KxIGI5BfidLsaxe8A7/GreenDrop?type=design&node-id=0%3A1&mode=design&t=TcUxUS6maIl1k4Bk-1)

# 📃 4. ERD

![image](https://github.com/Fizioo0102/commonPJT-3/assets/107913312/c92f9905-5330-4e8c-836d-5f2d3635a290)

# ♻️ 6. 서비스 소개

### 🥤 플라스틱 컵 분리수거 함

 모니터 화면에 해당일자 밸런스 게임 표시
 
 
 플라스틱 컵을 투입구에 올려놓으면 무게 센서 및 웹 캠(Open CV 활용)을 통해 플라스틱 컵 여부를 판별하여 수거
 
 <details>
 <summary> :earth_asia: Green Drop Ver.1 ~ 3 상세 이미지 </summary>
 
 ### :earth_asia: Green Drop Ver. 1
 
 -  구성 : 아두이노 + 라즈베리파이 + **무게센서**
  
  
 - 기능 소개 : 무게 센서를 통해서 순수 플라스틱 컵의 무게를 판단하여 컵 홀더 및 내용물 등을 수거하지 않도록 구현
  
 
 ![1](https://github.com/Fizioo0102/Green-Drop/assets/107913312/21321f3e-4f6b-4ee2-98c0-ad15cd87b5fd)
 
 ### :earth_asia: Green Drop Ver. 2
 
 - 구성 : 아두이노 + **노트북(AI) + 웹캠2개(side view)**
 
  
 - 기능 소개 : 웹 캠(Open CV 활용)과 Teachable Machine(Google) 통해 직접 학습된 모델을  사용하여 플라스틱 컵 여부를 판별하도록 구현
 
 
 ![2](https://github.com/Fizioo0102/Green-Drop/assets/107913312/3b36768a-d7a2-49fb-9f0d-214635496d22)
 
 ### :earth_asia: Green Drop Ver. 3
 
 - 구성 : 아두이노 + **라즈베리파이(AI) + 웹캠1개(top view)**
  
  
 - 기능 소개 : 웹 캠을 Top view로 전환함으로써 라즈베리파이를 통해 플라스틱 컵 판별 AI 모델을 구동할 수 있는 환경 구현
 
 
 ![3](https://github.com/Fizioo0102/Green-Drop/assets/107913312/f96c2571-a3c1-4d32-a554-7d73d53c33d6)
 
 </details> <br/>


### 🥤 웹서비스 
- **서비스 소개** <br/>
   - 저희 서비스 소개를 시작으로 react-slick Carousel을 사용하여 서비스의 다양한 기능을 소개하였습니다.
  <br/>
  <img src="https://github.com/Fizioo0102/Green-Drop/blob/2219c221a96adf9def029720ce99839b5e26f715/GIF/%EC%84%9C%EB%B9%84%EC%8A%A4%20%EC%86%8C%EA%B0%9C.GIF" width="300" height="600" /><br/>
  <hr />
- **밸런스게임** <br/>
  - 실시간으로 IoT 수거함 디바이스 화면에는 인기있는 밸런스 게임이 게시되어 있습니다.
  - 밸런스 게임 게시판에서 수거함 디바이스 화면에 표시될 다양한 게임 주제를 작성하고 확인할 수 있습니다.
  - 또한 지난 밸런스 게임 결과를 확인할 수 있으며, 카테고리 별로 게임 주제를 필터링하여 확인 할 수 있도록 구현하였습니다.
    
  - **밸런스 게임 조회** <br/>
  
  <img src="https://github.com/Fizioo0102/Green-Drop/blob/2219c221a96adf9def029720ce99839b5e26f715/GIF/%EB%B0%B8%EB%9F%B0%EC%8A%A4%20%EA%B2%8C%EC%9E%84%20%EC%A1%B0%ED%9A%8C.GIF" width="300" height="600" /><br/>
  - **밸런스 게임 등록** <br/>
  
  <img src="https://github.com/Fizioo0102/Green-Drop/blob/2219c221a96adf9def029720ce99839b5e26f715/GIF/%EB%B0%B8%EB%9F%B0%EC%8A%A4%20%EA%B2%8C%EC%9E%84%20%EB%93%B1%EB%A1%9D.GIF" width="300" height="600" /><br/>
  - **밸런스 게임 수정/삭제** <br/>
  
  <img src="https://github.com/Fizioo0102/Green-Drop/blob/2219c221a96adf9def029720ce99839b5e26f715/GIF/%EB%B0%B8%EB%9F%B0%EC%8A%A4%EA%B2%8C%EC%9E%84%20%EC%88%98%EC%A0%95%20%EC%82%AD%EC%A0%9C.GIF" width="300" height="600" /><br/>
  - **댓글 기능** <br/>
  
  <img src="https://github.com/Fizioo0102/Green-Drop/blob/2219c221a96adf9def029720ce99839b5e26f715/GIF/%EB%8C%93%EA%B8%80%20%EC%9E%91%EC%84%B1%20%EC%82%AD%EC%A0%9C.GIF" width="300" height="600" /><br/>
  <hr />
- **수거 현황** <br/>
  - 실시간으로 IoT 수거함에서 수거되고 있는 일회용 플라스틱 컵의 개수를 확인할 수 있습니다.
  - 당일은 시간 별 수거되는 양을 확인할 수 있으며, 주간 수거된 개수도 함께 확인할 수 있도록 구현하였습니다.
  <br/>
  <img src="https://github.com/Fizioo0102/Green-Drop/blob/2219c221a96adf9def029720ce99839b5e26f715/GIF/%EC%9D%BC%EC%9D%BC%20%EC%A3%BC%EA%B0%84%20%EC%88%98%EA%B1%B0%EB%9F%89.GIF" width="300" height="600" /><br/>
  <hr />
- **부가 기능** <br />
  - **그린 스토리** : 환경에 도움이 되는 다양한 기사를 제공하고 있습니다.
  - **분리 배출 가이드** : 환경부에서 제공하는 분리수거 가이드와 평소 잘 알지 못했던 금속, 고철 류 등을 포함하여 더욱 다양한 분리 배출 가이드를 제공하고 있습니다.
  - **수거함 위치** : 저희 IoT수거함의 위치를 제공하여 더 많은 사용자가 동참할 수 있도록 하였습니다.
  <br/>
  <img src="https://github.com/Fizioo0102/Green-Drop/blob/2219c221a96adf9def029720ce99839b5e26f715/GIF/%EA%B8%B0%ED%83%80%ED%99%94%EB%A9%B4.GIF" width="300" height="600" /><br/>
  <hr />
- **관리자 페이지** <br />
  - 실시간으로 수거되고 있는 플라스틱 컵의 개수 및 IoT수거함 디바이스 화면에 게시되어있는 당일의 밸런스 게임 주제를 대시보드를 통해 확인할 수 있습니다.
  - 밸런스 게임 게시판을 관리할 수 있습니다. (향후 확장성 고려)
  <br/>
  <img src="https://github.com/Fizioo0102/Green-Drop/blob/d74af2399c4c9787617a071ca8181817e22c86f1/GIF/%EA%B4%80%EB%A6%AC%EC%9E%90%20%ED%8E%98%EC%9D%B4%EC%A7%80.gif" width="900" height="600" /><br/>


### 🥤 실제 사용 영상 YOUTUBE 바로가기
- **GreenDrop ver.1 유저 테스트**

[![GreenDrop ver.1 유저 테스트](https://github.com/Fizioo0102/Green-Drop/assets/107913312/ca33abd9-0767-402c-8d0f-6ec3426d56a6)](https://youtu.be/serdEaDSmQw)

- **GreenDrop ver.3** 
  
[![GreenDrop ver.3](https://github.com/Fizioo0102/Green-Drop/assets/107913312/3590f05f-b515-4a59-950b-f9a864453ddf)](https://youtu.be/j7RCUMPcBFA?si=kgjYExig8LYEV3CA)

### 🥤 GreenDrop 사진첩
<details>
<summary>📷 유저테스트 </summary>
<img src="https://github.com/Fizioo0102/Green-Drop/assets/107913312/662b3732-8abd-4099-b971-f6b177f4e2da" width="450" height="300"/>
<img src="https://github.com/Fizioo0102/Green-Drop/assets/107913312/24277940-6b88-4d6a-bb61-2e9c0886ad8f" width="450" height="300"/> 
<img src="https://github.com/Fizioo0102/Green-Drop/assets/107913312/4ae51c9a-a9ee-417c-b4ef-b567cdec1d77" width="450" height="300"/> 
<img src="https://github.com/Fizioo0102/Green-Drop/assets/107913312/e37f237b-49a7-4492-9c88-02b1e2b1cd4c" width="450" height="300"/> 
</details>
<details>
<summary>📷 제작과정 </summary>
<img src="https://github.com/Fizioo0102/Green-Drop/assets/107913312/88cb59b8-d634-489e-8c1f-522d54418ac9" width="450" height="300"/> 
<img src="https://github.com/Fizioo0102/Green-Drop/assets/107913312/440b8978-c823-4b3f-b65b-d44cbe8cbb7a" width="450" height="300"/>
<img src="https://github.com/Fizioo0102/Green-Drop/assets/107913312/227673b1-06cf-4b49-aa6b-ca4c0ada604d" width="450" height="300"/> 
<img src="https://github.com/Fizioo0102/Green-Drop/assets/107913312/18830016-88cd-4e6c-a6cf-fe45135288ab" width="450" height="300"/> 
</details>
