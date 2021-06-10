import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export const DesignContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const DesignLogo = styled.div`
  margin: 0 10px;
`;

export const DesignTextFront = styled.div`
  display: flex;
  font-size: 20px;
  font-style: italic;
  font-weight: 600;
  color: #40407a;
  padding-top: 8px;
`;

export const DesignTextTail = styled(DesignTextFront)``;

function Logo() {
  return (
    <DesignContainer>
      <DesignTextFront>Nomad</DesignTextFront>
      <DesignLogo>
        <FontAwesomeIcon icon={faCoffee} size="2x" color="#40407a" />
      </DesignLogo>
      <DesignTextTail>Coffee</DesignTextTail>
    </DesignContainer>
  );
}

export default Logo;
