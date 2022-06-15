import { Button, styled } from "@mui/material";

const Btn = styled(Button)(({ theme }) => ({
  width: 400,
  marginBottom: 16,
  height: 50,
  color: "white",
  fontSize: 18,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

function AuthBtn({ children, disabled }) {
  return (
    <Btn
      variant="contained"
      type="submit"
      color="secondary"
      disabled={disabled}
    >
      {children}
    </Btn>
  );
}
export default AuthBtn;
