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
    padding: "3vw 3vw 6vw",
    display: "flex",
    flexWrap: "wrap",
    gap: "5vw",
  },
  formField: {
    display: "flex",
    flexDirection: "column",
    gap: "1vh",
    alignItems: "flex-start",
  },
  label: {
    fontSize: "20px",
  },
  input: { width: "20vw" },
  showError: {
    height: "1px",
  },
  button: {
    fontSize: "20px",
    width: "20vw",
    backgroundColor: "lavender",
    height: "auto",
    padding: "2vh",
    cursor: "pointer",
    margin: "3vh 5vw",
    borderRadius: "1vw",
  },
};

export default styles;
