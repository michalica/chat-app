import bgImg from "../../../assets/img/BodyBG.png";

const styles = {
  messageArea: {
    backgroundImage: `url(${bgImg})`,
    height: "calc(100vh - 80px)",
    overflowY: "scroll" as "scroll",
  },
  userArea: {
    height: 80,
    background: "#3898D4",
    position: "fixed" as "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
};

export default styles;
