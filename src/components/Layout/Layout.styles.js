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
  align-items: center;
  justify-content: center;
  margin: 12px;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  line-height: 20px;
  color: black;
  background-color: ${(props) => (props.isTitle ? "turquoise" : "#eab768")};
  border-radius: 10px;
  border: ${(props) => (props.isTitle ? "none" : "10px solid #f5cc8b")};
  flex-grow: ${(props) => (props.isMain ? 1 : 0)};
  width: ${(props) => (props.isFooter || props.isTitle ? "94%" : "50%")};
`;
