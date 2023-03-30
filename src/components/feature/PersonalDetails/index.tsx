import { Box, Button, Input, MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

const PersonalDetails = () => {
  const {
    register,
    control,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      mobileNumber: "",
      email: "",
      address: "",
    },
    mode: "onBlur",
  });
  const navigate = useNavigate();
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Complete Your Details To Proceed Further</Box>
      <Box sx={styles.form}>
        <Box sx={styles.formField}>
          <Box sx={styles.label}>First Name</Box>
          <Controller
            name="firstName"
            control={control}
            render={() => (
              <Input
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Min Length : 3",
                  },
                  maxLength: {
                    value: 20,
                    message: "Max Length : 20",
                  },
                })}
                placeholder="First Name"
                sx={styles.input}
              />
            )}
          />
          <Box sx={styles.showError}>
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </Box>
        </Box>
        <Box sx={styles.formField}>
          <Box sx={styles.label}>Last Name</Box>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <Input
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Min Length : 3",
                  },
                  maxLength: {
                    value: 20,
                    message: "Max Length : 20",
                  },
                })}
                placeholder="Last Name"
                sx={styles.input}
              />
            )}
          />
          <Box sx={styles.showError}>
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </Box>
        </Box>
        <Box sx={styles.formField}>
          <Box sx={styles.label}>Gender</Box>
          <Controller
            render={() => (
              <Select
                {...register("gender", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                placeholder="Select"
                sx={styles.input}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
                <MenuItem value="not prefer">Prefer Not to Say</MenuItem>
              </Select>
            )}
            name="gender"
            control={control}
          />
          <Box sx={styles.showError}>
            {errors.gender && <p>{errors.gender.message}</p>}
          </Box>
        </Box>
        <Box sx={styles.formField}>
          <Box sx={styles.label}>Date of Birth</Box>
          <Controller
            name="dateOfBirth"
            control={control}
            render={() => (
              <Input
                {...register("dateOfBirth", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value:
                      /^(0?[1-9]|[12][0-9]|3[01])[-](0?[1-9]|1[012])[-]\d{4}$/,
                    message: "Invalid Input, Enter in 01-01-2000 format",
                  },
                })}
                sx={styles.input}
              />
            )}
          />
          <Box sx={styles.showError}>
            {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
          </Box>
        </Box>
        <Box sx={styles.formField}>
          <Box sx={styles.label}>Mobile Number</Box>
          <Controller
            name="mobileNumber"
            control={control}
            render={({ field }) => (
              <Input
                {...register("mobileNumber", {
                  valueAsNumber: true,
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  min: {
                    value: 6000000000,
                    message: "Invalid Input",
                  },
                  minLength: {
                    value: 10,
                    message: "Required 10 digit",
                  },
                  maxLength: {
                    value: 10,
                    message: "Required 10 digit",
                  },
                })}
                placeholder="mobile number"
                sx={styles.input}
              />
            )}
          />
          <Box sx={styles.showError}>
            {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
          </Box>
        </Box>
        <Box sx={styles.formField}>
          <Box sx={styles.label}>Email</Box>
          <Controller
            name="email"
            control={control}
            render={() => (
              <Input
                {...register("email", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid Input",
                  },
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                placeholder="email"
                sx={styles.input}
              />
            )}
          />
          <Box sx={styles.showError}>
            {errors.email && <p>{errors.email.message}</p>}
          </Box>
        </Box>
        <Box sx={styles.formField}>
          <Box sx={styles.label}>Address</Box>
          <Controller
            name="address"
            control={control}
            render={() => (
              <Input
                {...register("address", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 10,
                    message: "Minimum Length : 10",
                  },
                })}
                sx={styles.input}
              />
            )}
          />
          <Box sx={styles.showError}>
            {errors.address && <p>{errors.address.message}</p>}
          </Box>
        </Box>
      </Box>
      <Button onClick={() => navigate("/")} sx={styles.button}>
        Back
      </Button>
      <Button
        disabled={!isValid}
        onClick={() => navigate("/educationalDetails")}
        sx={styles.button}
      >
        Next
      </Button>
    </Box>
  );
};

export default PersonalDetails;
