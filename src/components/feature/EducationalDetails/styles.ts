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
    margin: "2vh auto",
    border: "2px solid darkgray",
    borderRadius: "10px",
    padding: "3vw",
    display: "flex",
    flexWrap: "wrap",
    columnGap: "5vw",
    rowGap: "5vh",
  },
  formField: {
    display: "flex",
    flexDirection: "column",
    gap: "1vh",
    alignItems: "flex-start",
  },
  formField2: {
    display: "flex",
    flexDirection: "column",
    gap: "2vh",
    alignItems: "flex-start",
  },
  message: {
    display: "flex",
    flexDirection: "column",
    gap: "3vh",
    alignItems: "flex-start",
    flexBasis: "100%",
  },
  label: {
    fontSize: "20px",
  },
  input: { width: "20vw" },
  showError: {
    height: "1px",
  },
  messageBox: {
    width: "90%",
    height: "9vh",
    border: "1px solid",
    borderRadius: "5px",
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
