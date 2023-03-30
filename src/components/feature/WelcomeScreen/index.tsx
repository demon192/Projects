import { DeveloperMode } from "@mui/icons-material";
import { Box, Button, Switch } from "@mui/material";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

const WelcomeScreen = () => {
  const { control, watch } = useForm({
    defaultValues: {
      proceedForm: false,
    },
  });
  const navigate = useNavigate();
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>
        Welcome To The Onboarding Process Of KS Tech.
      </Box>
      <Box sx={styles.form}>
        <Box sx={styles.text}>
          You need to submit your personal and educational details to proceed
          further.
        </Box>
        <Box sx={styles.text}>
          Currently we are hiring 0 - 1 year of experienced candidates.
        </Box>
        <DeveloperMode
          style={{ color: "white", fontSize: "300px", margin: "2vh 0" }}
        />
        <Box sx={styles.text}>Interested for the opportunity ?</Box>
        <Controller
          name="proceedForm"
          control={control}
          render={({ field }) => (
            <Switch
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
            />
          )}
        />
      </Box>
      <Button
        disabled={!watch("proceedForm")}
        onClick={() => {
          navigate("/personalDetails");
        }}
        sx={styles.button}
      >
        Proceed
      </Button>
    </Box>
  );
};

export default WelcomeScreen;
