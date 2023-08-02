import classes from "./OverWeightModal.module.css";

function OverWeightModal() {
  return (
    <div className={classes.device_modal_container}>
      <div className={`${classes.device_modal_img} `}></div>
      <div className={classes.device_modal_title}>내용물을 비워주세요!</div>
      <div className={classes.device_modal_content}>
        음료, 얼음, 컵홀더 등을 비운 후 다시 시도해주세요!
      </div>
    </div>
  );
}

export default OverWeightModal;
