import { styled, Typography } from "@mui/material";
import { ReactComponent as HomeSvg } from "../assets/home.svg";

const Intro = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  background: "whitesmoke",
  position: "relative",
  flex: 1,
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
}));
const Brand = styled(Typography)(({ theme }) => ({
  marginLeft: 30,
  marginTop: 30,
  color: theme.palette.primary.main,
}));
const Header = styled(Typography)(({ theme }) => ({
  marginLeft: 45,
  fontSize: 16,
  fontWeight: 200,
}));
const HomeImg = styled(HomeSvg)(() => ({
  width: "90%",
  alignSelf: "center",
}));

function AuthIntro({ children }) {
  return (
    <Intro>
      <Brand variant="h4">TOUCH OF HEALTH</Brand>
      <Header variant="body2">Quality care from people who cares.</Header>
      <HomeImg />
    </Intro>
  );
}
export default AuthIntro;
