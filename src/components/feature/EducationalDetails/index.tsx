import { Box, Button, Input, MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

const EducationalDetails = () => {
  const {
    register,
    control,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      qualification: "",
      year: "",
      college: "",
      cityOfCollege: "",
      tech: "",
      message: "",
    },
    mode: "onBlur",
  });
  const navigate = useNavigate();
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Fill Your Educational Details</Box>
      <Box sx={styles.form}>
        <Box sx={styles.formField}>
          <Box sx={styles.label}>Highest Qualification</Box>
          <Controller
            render={() => (
              <Select
                {...register("qualification", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                sx={styles.input}
              >
                <MenuItem value="btech">B.Tech</MenuItem>
                <MenuItem value="mtech">M.Tech</MenuItem>
                <MenuItem value="bsc">Bsc</MenuItem>
                <MenuItem value="msc">Msc</MenuItem>
                <MenuItem value="bca">BCA</MenuItem>
                <MenuItem value="mca">MCA</MenuItem>
              </Select>
            )}
            name="qualification"
            control={control}
          />
          <Box sx={styles.showError}>
            {errors.qualification && <p>{errors.qualification.message}</p>}
          </Box>
        </Box>
        <Box sx={styles.formField2}>
          <Box sx={styles.label}>Passing Year</Box>
          <Controller
            name="year"
            control={control}
            render={() => (
              <Input
                {...register("year", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  maxLength: {
                    value: 4,
                    message: "4 digit required",
                  },
                  minLength: {
                    value: 4,
                    message: "4 Digit required",
                  },
                  min: 2015,
                  max: 2025,
                })}
                placeholder="e.g. 2023"
                sx={styles.input}
              />
            )}
          />
          <Box sx={styles.showError}>
            {errors.year && <p>{errors.year.message}</p>}
          </Box>
        </Box>
        <Box sx={styles.formField2}>
          <Box sx={styles.label}>University / College</Box>
          <Controller
            name="college"
            control={control}
            render={() => (
              <Input
                {...register("college", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                sx={styles.input}
              />
            )}
          />
          <Box sx={styles.showError}>
            {errors.college && <p>{errors.college.message}</p>}
          </Box>
        </Box>
        <Box sx={styles.formField}>
          <Box sx={styles.label}>City of education</Box>
          <Controller
            name="cityOfCollege"
            control={control}
            render={() => (
              <Select
                {...register("cityOfCollege", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                sx={styles.input}
              >
                <MenuItem value="noida">Noida</MenuItem>
                <MenuItem value="ghaziabad">Ghaziabad</MenuItem>
                <MenuItem value="delhiNCR">Delhi NCR</MenuItem>
                <MenuItem value="delhi">Delhi</MenuItem>
                <MenuItem value="haryana">Haryana</MenuItem>
              </Select>
            )}
          />
          <Box sx={styles.showError}>
            {errors.cityOfCollege && <p>{errors.cityOfCollege.message}</p>}
          </Box>
        </Box>
        <Box sx={styles.formField}>
          <Box sx={styles.label}>Technology known</Box>
          <Controller
            name="tech"
            control={control}
            render={() => (
              <Select
                {...register("tech", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                sx={styles.input}
              >
                <MenuItem value="front-end">Front-End</MenuItem>
                <MenuItem value="back-end">Back-End</MenuItem>
                <MenuItem value="full-stack"> Full Stack</MenuItem>
                <MenuItem value="java-dev">Java Development</MenuItem>
                <MenuItem value="android-dev">Android Dev</MenuItem>
                <MenuItem value="python">Python</MenuItem>
              </Select>
            )}
          />
          <Box sx={styles.showError}>
            {errors.tech && <p>{errors.tech.message}</p>}
          </Box>
        </Box>
        <Box sx={styles.message}>
          <Box sx={styles.label}>Message for Hiring Team!</Box>
          <Controller
            name="message"
            control={control}
            render={() => (
              <Input {...register("message")} sx={styles.messageBox} />
            )}
          />
        </Box>
      </Box>
      <Button onClick={() => navigate("/personalDetails")} sx={styles.button}>
        Back
      </Button>
      <Button
        disabled={!isValid}
        onClick={() => navigate("/thankyou")}
        sx={styles.button}
      >
        Next
      </Button>
    </Box>
  );
};

export default EducationalDetails;
