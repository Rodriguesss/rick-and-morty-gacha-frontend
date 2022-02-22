import styled from "styled-components"
import { Images } from '../../utils/images'

export const ContainerStyle = styled.main`
  height: 100vh;

  margin: 0 auto;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('${Images['Background']}');
  background-repeat: no-repeat;
  background-size: cover;

  cursor: url('${Images['Cursor2']}') 4 12, auto !important;
`