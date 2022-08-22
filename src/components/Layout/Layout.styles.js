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
  margin: 1%;
  padding: 20px;
  font-size: 20px;
  line-height: 20px;
  color: black;
  background-color: ${(props) => (props.isTitle ? "turquoise" : "#eab768")};
  border-radius: 10px;
  border: 10px solid ${(props) => (props.isTitle ? "aliceblue" : "#f5cc8b")};
  flex-grow: ${(props) => (props.isMain ? 1 : 0)};
`;
