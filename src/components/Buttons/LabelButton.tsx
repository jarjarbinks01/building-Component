import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { ReactComponent as Task } from "../../assets/icons/Task.svg";

const StyledContainer = styled.div`
    width: 200px;
`

const StyledLabelButton = styled(Button)`
  color: #2c627e;
`;

const StyledSvg = styled(Task)`
  fill: #2c627e;
`;

const LabelButton = () => {

  return (
    <StyledContainer>
      <StyledLabelButton
        type="button"
        // primary={primary}
        // disabled={disabled}
        // size={size}
        aria-label="SideBar-Menu"
        // {...props}
        variant="text"
        startIcon={<StyledSvg />}
        fullWidth
      >
        Task
      </StyledLabelButton>
    </StyledContainer>
  );
};

export default LabelButton;
