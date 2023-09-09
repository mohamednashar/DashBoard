import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../../components/Header";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const regEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const regPhone = /^01[0-2,5]{1}[0-9]{8}$/;

const Form = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    handleClick();
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Header title={"CREATE USER"} subTitle={"Create New User Profile"}/>
      <Stack direction={"row"} gap={3}>
        <TextField
          helperText={
            Boolean(errors.firstName) ? "This Field Is Required." : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          error={Boolean(errors.firstName)}
          sx={{ flex: 1 }}
          id="filled-basic"
          label="First Name"
          variant="filled"
        />
        <TextField
          helperText={
            Boolean(errors.lastName) ? "This Field Is Required." : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          error={Boolean(errors.lastName)}
          sx={{ flex: 1 }}
          id="filled-basic"
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        helperText={
          Boolean(errors.email) ? "Please Enter A Valid Email Address" : null
        }
        {...register("email", { required: true, pattern: regEmail })}
        error={Boolean(errors.email)}
        id="filled-basic"
        label="Email"
        variant="filled"
      />

      <TextField
        helperText={
          Boolean(errors.phone) ? "Please Enter A Valid Mobile Number" : null
        }
        {...register("phone", { required: true, pattern: regPhone })}
        error={Boolean(errors.phone)}
        id="filled-basic"
        label="Contact Number"
        variant="filled"
      />
      <TextField id="filled-basic" label="Address 1" variant="filled" />
      <TextField id="filled-basic" label="Address 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
        >
          Create New User
        </Button>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{ vertical:"top", horizontal:"right" }}>
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account Created Successfully.
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
