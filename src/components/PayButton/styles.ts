import styled from "styled-components/native";

interface ISharedProps {
  focused: boolean;
}


export const Button = styled.View<ISharedProps>`
  width: 60px;
  height: 60;
  border-radius: 30px;
  align-items: center;
  justify-content:center;
  background:${p => p.focused ? "#FFF" : "#00ac4a"};
`;

export const Label = styled.Text<ISharedProps>`
  color: ${p => p.focused ? "#000" : "#FFF"};
  font-size: 12px;
`;