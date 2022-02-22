import styled from "styled-components"
import { Images } from "../../utils/images"

const InputStyle = styled.input`
  padding: 10px;

  border: 2px solid #2F2F2F;
  border-radius: 10px;

  cursor: url('${Images['Cursor1']}') 2 2, pointer !important;

  ::placeholder {
    color: #000000;
  }

  :focus {
    ::placeholder {
      color: transparent;
    }

    
  }
`

const LinkStyle = styled.b`
  text-decoration: underline;
  color: #178DBD;

  cursor: url('${Images['Cursor1']}') 2 2, pointer !important;
`

const ButtonStyle = styled.button`
  &, &::after {
    font-size: 17px;
    border: 2px solid #F9F853CC;
    border-radius: 5px;
    background-color: #F9F853CC;
    color: #000000;
    letter-spacing: 3px;
    line-height: 80px;
    outline: transparent;
    position: relative;
    cursor: url('${Images['Cursor1']}') 2 2, pointer !important;
  }

  &::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(90% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(90% -6px 5% 0);
    
    content: 'Entrar';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #F9F853CC;
    text-shadow: -3px -3px 0px #F9F853CC, 3px 3px 0px #E89AC7EE;
    clip-path: var(--slice-0);
  }

  :hover::after {
    animation: 1.5s glitch;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }
    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }
    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }
    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }
    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }
    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }
    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }
    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }
    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }
    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }
    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
`

const ButtonRegisterStyle = styled.button`
  font-size: 17px;
  border: 2px solid #F9F853CC;
  border-radius: 5px;
  background-color: #F9F853CC;
  color: #000000;
  letter-spacing: 3px;
  line-height: 80px;
  outline: transparent;
  position: relative;
  cursor: url('${Images['Cursor1']}') 2 2, pointer !important;
`

const AuthToggle = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 20px;
`


const FormStyle = styled.form`
  width: 250px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;

  background-color: #E89AC7EE;

  border: 2px solid #2F2F2F;
  border-radius: 10px;

  text-align: center;
`

export { AuthToggle, InputStyle, ButtonStyle, LinkStyle, ButtonRegisterStyle, FormStyle }