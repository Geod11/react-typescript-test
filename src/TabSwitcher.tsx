import styled from "styled-components";
import { ButtonType } from "./Parent";

interface PropsInterface {
    activeButton: ButtonType;
    onChangeActiveButton: (newActiveButton: ButtonType) => void;
  }
  
  interface ButtonProps {
    active: boolean;
  }
  
  export const TabSwitcher = (props:PropsInterface) => {
  const {activeButton, onChangeActiveButton} = props;
  
    return (
      <ButtonsContainer>
       <LeftsideButton active={activeButton==="leftside"} onClick={() => onChangeActiveButton("leftside")}>This month</LeftsideButton>
       <RightsideButton active={activeButton==="rightside" }  onClick={() => onChangeActiveButton("rightside")}>Overall</RightsideButton>
      </ButtonsContainer>
    )
  }
  
      const ButtonsContainer = styled.div`
       display: flex;
       flex-direction: row;
       justify-content: center;
      `;
  
  const LeftsideButton = styled.button<ButtonProps>`
  background-color: ${p=> p.active ? "#dae6e5" : "#2488eb"};
  color: ${p=> p.active ? "#2488eb" : "white"};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-width: 1px;
  font-size: 22px;
  padding: 7px;
  width: 130px;
  `;
  
  const RightsideButton = styled.button<ButtonProps>`
  background-color: ${p=> p.active ? "#dae6e5" : "#2488eb"};
  color: ${p=> p.active ? "#2488eb" : "white"};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left: none;
  border-width: 1px;
  font-size: 22px;
  padding: 7px;
  width: 130px;
  `;