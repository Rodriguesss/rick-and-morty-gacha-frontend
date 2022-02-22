import 'react-toastify/dist/ReactToastify.css'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: unset;
    }
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Press Start 2P', cursive;
  }
`

export {
  StyledLink,
  GlobalStyle
}