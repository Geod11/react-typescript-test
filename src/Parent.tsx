import { useState } from "react";
import { TabSwitcher } from "./TabSwitcher";
import styled from "styled-components";   

export type ButtonType = "leftside" | "rightside";

export default function Test() {

  const [activeButton, setActiveButton] = useState<ButtonType>("leftside");

  return (
    <Wrapper>
      <TabSwitcher activeButton={activeButton} onChangeActiveButton={setActiveButton}/>
      TabSwitcher component
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: green;
  background-color: white;
  width: 100%;
  height: 100%;
  padding-top: 100px;

  TabSwitcher {
    padding-bottom: 50px;
  }
`;