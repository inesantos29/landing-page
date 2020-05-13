import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'OpenSans-Bold';
    src: url('./fonts/OpenSans-Bold.ttf');
  }

  @font-face {
    font-family: 'OpenSans-ExtraBold';
    src: url('./fonts/OpenSans-ExtraBold.ttf');
  }

  @font-face {
    font-family: 'OpenSans-Light';
    src: url('./fonts/OpenSans-Light.ttf');
  }

  @font-face {
    font-family: 'OpenSans';
    src: url('./fonts/OpenSans-Regular.ttf');
  }

  @font-face {
    font-family: 'OpenSans-SemiBold';
    src: url('./fonts/OpenSans-Semibold.ttf');
  }

  body {
    margin: 0 auto;
    color: #565656;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f7f7f7;
    font-family: 'OpenSans-Light', sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  p,
  h1,
  h2,
  h3 {
    padding: 0;
    margin: 0;
  }

`
