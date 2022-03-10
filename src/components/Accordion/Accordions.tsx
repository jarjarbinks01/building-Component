import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";

const StyledContainer = styled('div')`
  width:900px;
`

const StyledAccordion = styled(Accordion)(() => ({
  "&.MuiAccordion-root":{
    borderRadius: '15px'
  }
}))

const Accordions = ({ title, children }:{title: String, children: React.ReactNode}) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <StyledContainer>
      <StyledAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon fontSize="large" sx={{ color: "#2D9FC3" }} />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h4"  sx={{ width: "100%", color: "#2D9FC3" }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </StyledAccordion>
      </StyledContainer>
  );
};

export default Accordions;
