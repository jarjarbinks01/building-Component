import { Backdrop, IconButton, styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import React from "react";
import { ReactComponent as Close } from "../../assets/icons/DialogClose.svg";
import { ReactComponent as Error } from "../../assets/icons/ErrorAlert.svg";
import { ErrorDialogProps } from "./ErrorDialog.types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: "800px",
  height: "310px",
  bgcolor: "#FFFFFF",
  color: "#EF841F",
  borderRadius: "15px",
  transform: "translate(-50%, -50%)",
  p: 4,
};

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primaryButtonColor1.main};
  color: ${(props) => props.theme.palette.primaryButtonColor1.contrastText};
  width: 107px;
  height: 38px;
  border-radius: 19px;
  padding: 0;

  font-size: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) =>
      props.theme.palette.primaryButtonColor1.light};
    box-shadow: none;
  }
`;

const StyledButton2 = styled(Button)`
  background-color: ${(props) =>
    props.theme.palette.secondaryButtonColor2.main};
  color: ${(props) => props.theme.palette.secondaryButtonColor2.contrastText};
  width: 250px;
  height: 38px;
  border-radius: 19px;
  padding: 0;

  font-size: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) =>
      props.theme.palette.secondaryButtonColor2.main};
    box-shadow: none;
  }
`;

const StyledErrorIcon = styled(Error)`
  position: absolute;
`;

const StyledCloseIcon = styled(Close)`
  position: absolute;
  margin-left: -20px;
  margin-top: -20px;
`;

const StyledIconButton1 = styled(IconButton)`
  display: flex;
  align-items: center;
  height: 40px;
  width: 40px;
`;

const StyledSvgContainer1 = styled("div")`
  display: flex;
  margin-top: 2px; //temp style
  circle {
    fill: #ffffff;
  }
  path {
    fill: ${(props) => props.theme.palette.secondaryButtonColor2.main};
  }
  &:hover circle {
    fill: #ffffff;
  }
  &:hover path {
    fill: ${(props) => props.theme.palette.secondaryButtonColor2.main};
  }
`;

const ErrorDialog = ({
  id,
  title,
  message,
  text,
  ...props
}: ErrorDialogProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <StyledButton2 onClick={handleClickOpen}>{text}</StyledButton2>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-modal-title"
        aria-describedby="alert-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={{ ...style, width: "800px" }}>
          <Grid container spacing={1}>
            <Grid item xs={14} sm={3}>
              <Box
                sx={{
                  paddingTop: "30px",
                  paddingLeft: "10px",
                  display: "block",
                }}
              >
                <StyledErrorIcon />
              </Box>
            </Grid>
            <Grid item xs={14} sm={9}>
              <Box
                sx={{
                  paddingTop: "20px",
                  gap: 2,
                  display: "block",
                }}
              >
                <Typography
                  id="alert-modal-title"
                  variant="h1"
                  sx={{ color: "#F6354A", display: "block" }}
                >
                  {title}
                </Typography>
                <Box component="span" sx={{ display: "block", p: 1 }}></Box>
                <Typography
                  id="alert-modal-description"
                  variant="h2"
                  sx={{ color: "#3D4F76", display: "block" }}
                >
                  {message}
                </Typography>
              </Box>
              <Grid item xs={14} sm={1}>
                <Box
                  sx={{
                    position: "absolute",
                    left: "96%",
                    top: "-5%",
                    display: "block",
                  }}
                >
                  <StyledIconButton1 aria-label="close" onClick={handleClose}>
                    <StyledSvgContainer1>
                      <StyledCloseIcon />
                    </StyledSvgContainer1>
                  </StyledIconButton1>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={14} sm={14}>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StyledButton onClick={handleClose}>OK</StyledButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ErrorDialog;
