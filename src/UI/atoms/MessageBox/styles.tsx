import { MessageBoxProps } from "./MessageBox";

const styles = {
  root: ({ backgroundColor }: MessageBoxProps) => ({
    border: "1px solid #a7a7a7",
    borderRadius: 5,
    padding: 16,
    backgroundColor: backgroundColor ? backgroundColor : "white",
    display: "inline-block",
  }),
  name: {
    color: "#a7a7a7",
  },
  time: {
    color: "#a7a7a7",
  },
  message: {
    marginTop: 5,
    marginBottom: 5,
  },
};

export default styles;
