import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import classes from "./Device.module.css";
import verseImg from "../assets/vs.png";
import decorateImg_1 from "../assets/deviceUI_1.png";
import decorateImg_2 from "../assets/deviceUI_2.png";
// import ConfirmModal from "../components/DeviceUI/ConfirmModal";
// import CompleteModal from "../components/DeviceUI/CompleteModal";
// import success from "../assets/success.mp3"; 향후 사운드 추가
import axios from "axios";
import LeftCompleteModal from "../components/DeviceUI/LeftCompleteModal";
import RightCompleteModal from "../components/DeviceUI/RightCompleteModal";
import LeftConfirmModal from "../components/DeviceUI/LeftConfirmModal";
import RightConfirmModal from "../components/DeviceUI/RightConfirmModal";
import LeftOverWeightModal from "../components/DeviceUI/LeftOverWeightModal";
import RightOverWeightModal from "../components/DeviceUI/RightOverWeightModal";

// API
const api = "http://i9b103.p.ssafy.io:8000/";

// 날짜 자동생성
const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// 수거 데이터 불러오기
const CollectData = async () => {
  const response = await fetch(`${api}plastic/current`);
  return response.json();
};

// 디바이스 페이지 정보
function DevicePage() {
  // 오디오 재생(수정필요)
  // var audio = new Audio(success);

  // 포트 관련 함수
  const [port, setPort] = useState(null);
  const [LeftConfirm, setLeftConfirm] = useState(false);
  const [LeftComplete, setLeftComplete] = useState(false);
  const [LeftOverModal, setLeftOverModal] = useState(false);
  const [RightConfirm, setRightConfirm] = useState(false);
  const [RightComplete, setRightComplete] = useState(false);
  const [RightOver, setRightOver] = useState(false);
  const [GameInfo, setGameInfo] = useState(null); // 데이터를 담을 상태
  const { question, leftAnswer, rightAnswer } = GameInfo || {}; // 데이터를 디스트럭처링하여 사용

  const BalanceGameData = async () => {
    const currentDate = getCurrentDate(); // 현재 날짜를 가져옴
    try {
      const response = await axios.get(`${api}game/${currentDate}`); // API 엔드포인트를 적절히 수정해주세요
      setGameInfo(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (!GameInfo) {
      BalanceGameData();
    }
  }, [GameInfo]);

  useEffect(() => {
    const connectSerial = async () => {
      try {
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });
        setPort(port);

        const reader = port.readable.getReader();
        readData(reader);
      } catch (error) {
        console.error("Error connecting to serial port:", error);
      }
    };

    const handleClick = () => {
      connectSerial();
    };

    document.addEventListener("click", handleClick);

    return () => {
      if (port && port.readable) {
        port.readable.cancel();
        port.close();
      }
      document.removeEventListener("click", handleClick);
    };
  }, [port]);

  const readData = async (reader) => {
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          console.log("Reader has been canceled.");
          break;
        }
        const textDecoder = new TextDecoder();
        const data = textDecoder.decode(value);
        const portValue = data.trim().replace(/\s+/g, " ");
        console.log(portValue);

        // 왼쪽 수거 로직 구현

        // 왼쪽 아무것도 없음
        if (portValue.includes("s")) {
          setLeftConfirm(false);
          setLeftComplete(false);
          setLeftOverModal(false);
        }

        // 왼쪽 측정
        if (portValue.includes("m")) {
          setLeftConfirm(true);
          setLeftComplete(false);
          setLeftOverModal(false);
        }

        // 왼쪽 수거
        if (portValue.includes("L")) {
          setLeftConfirm(false);
          setLeftComplete(true);
          setLeftOverModal(false);
          setTimeout(() => {
            setLeftComplete(false);
          }, 2000);

          axios({
            url: `${api}plastic/L`,
            method: "patch",
            data: {
              // 보낼 데이터
              equipmentSeq: 1,
            },
          });
        }

        // 왼쪽 무거움 경고
        if (portValue.includes("o")) {
          setLeftConfirm(false);
          setLeftComplete(false);
          setLeftOverModal(true);
        }

        // 오른쪽 수거 로직 구현

        // 오른쪽 측정
        if (portValue.includes("M")) {
          setRightConfirm(true);
          setRightComplete(false);
          setRightOver(false);
        }

        // 오른쪽 수거
        if (portValue.includes("R")) {
          setRightConfirm(false);
          setRightComplete(true);
          setRightOver(false);
          setTimeout(() => {
            setRightComplete(false);
          }, 2000);

          axios({
            url: `${api}plastic/R`,
            method: "patch",
            data: {
              // 보낼 데이터
              equipmentSeq: 1,
            },
          });
        }

        // 오른쪽 무거움 경고
        if (portValue.includes("O")) {
          setRightConfirm(false);
          setRightComplete(false);
          setRightOver(true);
        }

        // 오른쪽 아무것도 없음
        if (portValue.includes("S")) {
          setRightConfirm(false);
          setRightComplete(false);
          setRightOver(false);
        }
      }
    } catch (error) {
      console.error("Error reading data:", error);
    }
  };

  const { data, status } = useQuery("gameData", CollectData, {
    refetchInterval: 2000, // 2초마다 데이터 리프레시
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error fetching data</div>;
  }

  // 위에서 호출한 data를 통해 데이터 명칭 별 정의하기
  const { leftCount, rightCount } = data;

  // 전체 카운트 및 왼쪽,오른쪽 비율
  const totalCount = leftCount + rightCount;
  let leftBarPercent =
    leftCount !== 0 ? Math.round((leftCount / totalCount) * 100) : 7;
  let rightBarPercent =
    rightCount !== 0 ? Math.round((rightCount / totalCount) * 100) : 7;
  if (totalCount === 0) {
    leftBarPercent = 50;
    rightBarPercent = 50;
  }

  return (
    <div className={classes.device_container}>
      {/* 오디오 관련 버튼 향후 재구성 */}
      {/* <input type="button" onClick={() => audio.play()} value="PLAY"></input> */}

      {LeftConfirm && <LeftConfirmModal />}
      {LeftComplete && <LeftCompleteModal />}
      {LeftOverModal && <LeftOverWeightModal />}
      {RightConfirm && <RightConfirmModal />}
      {RightComplete && <RightCompleteModal />}
      {RightOver && <RightOverWeightModal />}

      {/* UI 작업용 */}
      {/* {<LeftConfirmModal />}
      {<LeftCompleteModal />}
      {<LeftOverWeightModal />}
      {<RightConfirmModal />}
      {<RightCompleteModal />}
      {<RightOverWeightModal />} */}

      <img className={classes.decorate_left_img} src={decorateImg_1} alt="" />
      <img className={classes.decorate_right_img} src={decorateImg_2} alt="" />
      <img className={classes.verse_img} src={verseImg} alt="" />
      <div className={classes.title_box}>{question}</div>
      <div className={classes.content_box}>
        <div className={classes.box}>
          <div
            style={{ backgroundColor: "#02B2A7" }}
            className={classes.box_title}
          >
            A
          </div>
          <div className={classes.box_content}>
            <div>{leftAnswer}</div>
          </div>
        </div>
        <div className={classes.box}>
          <div
            style={{ backgroundColor: "#FE2F73" }}
            className={classes.box_title}
          >
            B
          </div>
          <div className={classes.box_content}>
            <div>{rightAnswer}</div>
          </div>
        </div>
      </div>
      <div className={classes.result_box}>
        <div
          style={{ width: `${leftBarPercent}%` }}
          className={`${classes.result_box_bar} ${classes.result_box_leftbar}`}
        >
          <span className={classes.result_num}>{leftCount}개</span>
        </div>
        <div
          style={{ width: `${rightBarPercent}%` }}
          className={`${classes.result_box_bar} ${classes.result_box_rightbar}`}
        >
          <span className={classes.result_num}>{rightCount}개</span>
        </div>
      </div>
    </div>
  );
}

export default DevicePage;
