import styled from "styled-components/native";

export const View = styled.View`
  background-color: ${({ theme }) => theme.colors.mainBackground};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Text = styled.Text`
  color: blue;
`;
