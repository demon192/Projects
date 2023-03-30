import { SxProps } from "@mui/material/styles";
const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    textAlign: "center",
    backgroundColor: "ghostwhite",
    height: "100vh",
  },
  heading: {
    fontSize: "24px",
    color: "green",
    margin: "auto",
    paddingTop: "5vh",
  },
  form: {
    backgroundColor: "whitesmoke",
    width: "50vw",
    margin: "3vh auto",
    border: "2px solid darkgray",
    borderRadius: "10px",
    padding: "3vw",
  },
  text: {
    fontSize: "20px",
    margin: "2vh 0",
  },
  checkIcon: { color: "white", fontSize: "300px", margin: "2vh 0" },
};

export default styles;