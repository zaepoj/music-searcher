import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";
import logo from "../logo.png";

interface topbarProps {
  scrolled?: boolean;
  logoLink?: () => void;
}

const StyledBar = styled(Flex)`
  top:0;
  left: 0;
  right: 0;
  position:fixed;
  z-index: 999;
  background-color: ${(props) => props.theme.colors.navy};
  padding-bottom: ${(props: topbarProps) => (props.scrolled ? ".25em" : "1em")}
  padding-top: ${(props: topbarProps) => (props.scrolled ? "0em" : "1em")}
  transition: .2s;
  min-height: 50px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(10px);
    
  }
`;

const Topbar: FunctionComponent<topbarProps> = ({
  children,
  scrolled,
  logoLink,
}) => {
  return (
    <Box>
      <StyledBar width={"100%"} scrolled={scrolled}>
        <img
          style={{
            maxWidth: "75px",
            maxHeight: "75px",
            zIndex: 1000,
            cursor: "pointer",
          }}
          src={logo}
          alt="logo"
          onClick={logoLink}
        />
        {children}
      </StyledBar>
    </Box>
  );
};

export default Topbar;
