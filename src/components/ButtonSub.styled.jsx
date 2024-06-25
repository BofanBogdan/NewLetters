import styled from "@mui/material/styles/styled";
import { Button } from "@mui/material";

const ButtonSub = styled(Button)({
  width: "8rem",
  color: "black",
  backgroundColor: "rgba(245, 217, 39, 0.86)",
  padding: "0.8rem",
  fontSize: "1rem",
  textTransform: "capitalize",
  alignSelf: "center",
  "&:hover": {
    backgroundColor: "white",
    boxShadow: "rgba(245, 217, 39, 0.86) 0px 22px 70px 4px;",
  },
});

export default ButtonSub;
