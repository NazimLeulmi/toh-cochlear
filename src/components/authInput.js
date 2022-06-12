import { TextField, styled } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Input = styled(TextField)(({ theme }) => ({
  width: 400,
  marginBottom: 16,
}));

function AuthInput({ field, label, placeholder }) {
  return (
    <Input
      variant="filled"
      label={label}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="center">
            <AccountCircle sx={{ color: "rgba(0,0,0,.3)" }} />
          </InputAdornment>
        ),
      }}
      type={
        label === "PASSWORD" || label === "PASSWORD CONFIRMATION"
          ? "password"
          : null
      }
      {...field}
    />
  );
}

export default AuthInput;
