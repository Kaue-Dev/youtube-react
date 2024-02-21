import React from "react";
import styled from "styled-components";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { colorModeContext } from "./ColorMode";

const StyledSwitch = styled.div`
  background-color: ${({ theme }) => theme.borderBase};
  border: 0;
  padding: 3px;
  font-size: 12px;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: space-around;
  border-radius: 10000px;
  position: relative;
  label {
    width: 50px;
  }
  span {
    display: inline-flex;
    width: 22px;
    height: 20px;
    align-items: center;
    justify-content: center;
  }

  label:before {
    content: "";
    background-color: #fafafa;
    border: 1px solid #333333;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: 0.3s;
    cursor: pointer;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked + label:before {
    transform: translateX(100%);
  }
`;

export default function DarkModeSwitch() {

  const context = React.useContext(colorModeContext)

  return (
    <StyledSwitch>
      <input
        id="darkmode"
        type="checkbox"
        onChange={() => {
          context.mode === 'dark' ? context.setMode('light') : context.setMode('dark')
        }}
      />
      <label htmlFor="darkmode" className="darkmode-switch">
        <span><MdSunny/></span>
        <span><IoMdMoon/></span>
      </label>
    </StyledSwitch>
  );
}