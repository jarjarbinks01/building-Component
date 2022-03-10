import React from "react";
import { IconButton} from "@mui/material";
import employer from '../../assets/icons/Employer.svg'
import styled from "@emotion/styled";


const StyledIconButton = styled(IconButton)((theme) =>({
    width: '50px',
    height: '50px',

    
}));

const IconImage = styled.img`
`

const CircleIconButton = () => {
  return (
   
      <StyledIconButton
        type="button"
        // onClick={onClick}
        // primary={primary}
        // disabled={disabled}
        // size={size}
        aria-label="Bottom-Menu"
        // {...props}
        >
            <IconImage src={employer} alt="employer icon button"/>
            </StyledIconButton>
  );
};

export default CircleIconButton;
