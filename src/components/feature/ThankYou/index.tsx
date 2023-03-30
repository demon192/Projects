import { Box } from "@mui/material";
import { CheckCircleRounded } from "@mui/icons-material";
import styles from "./styles";

const ThankYou = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Thank You For Connecting With Us</Box>
      <Box sx={styles.form}>
        <Box sx={styles.text}>
          Thankyou your details were submitted successfully.
        </Box>
        <CheckCircleRounded sx={styles.checkIcon} />
        <Box sx={styles.text}>
          Our hiring team will connect soon with you if your profile matches our
          requirements.
        </Box>
      </Box>
    </Box>
  );
};

export default ThankYou;
