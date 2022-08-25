import styled from "styled-components";

export const Title = styled.h1``;

export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  text-align: center;
  padding: 20px;
  font-size: 24px;
  color: black;
  a {
    color: white;
  }
  background-color: ${(props) =>
    props.isKanto ? "#e1695c" : props.isJohto ? "#3165e4" : "transparent"};
  border-radius: 10px;
  border: ${(props) =>
    props.isKanto
      ? "10px solid #e160b3"
      : props.isJohto
      ? "10px solid #58e4d8"
      : "none"};
  flex-grow: ${(props) => (props.isMain ? 1 : 0)};
  width: ${(props) =>
    props.isFooter || props.isTitle
      ? "calc(98.5% - 44px)"
      : "calc(48.5% - 44px)"};
  ${(props) =>
    props.isFooter
      ? "background: purple; a { text-decoration: none; color: white; font-weight: 700; font-size: 32px; }"
      : ""};
`;
