import { createGlobalStyle, styled } from "styled-components";

const cores = {
  bege1: "#fff8f2",
  bege2: "#ffebd9",
  rosa: "#e66767",
  branco: "#ffffff",
};

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif
  }

  body{
  background-color: ${cores.bege1};
  color: ${cores.rosa};
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;
