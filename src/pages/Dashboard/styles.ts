import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
 hasError: boolean;
}

// ´´ = template literals
export const Title = styled.h1`
 font-size: 36px;
 color: #3a3a3a;
 max-width: 100%;
 line-height: 56px;

 margin-top: 50px;
`;
export const Form = styled.form<FormProps>`
 margin-top: 20px;
 max-width: 100%;
 display: flex;

 input {
  flex: 1;
  height: 70px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

  border: 2px solid #fff;
  border-right: 0;

  ${(props) =>
   props.hasError &&
   css`
    border-color: #c53030;
   `}

  &::placeholder {
   color: #a8a8b3;
  }
 }

 button {
  width: 210px;
  height: 70px;
  background: #ff5700;
  border: 0;
  border-radius: 0 5px 5px 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
   background: ${shade(0.2, '#ff5700')};
  }
 }
`;

export const Error = styled.span`
 display: block;
 color: #c53030;
 margin-top: 8px;
`;

export const Repositories = styled.div`
 margin-top: 50px;
 max-width: 100%;

 a {
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  text-decoration: none;

  display: flex;
  align-items: center;
  transition: transform 0.2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

  &:hover {
   transform: translateX(10px);
   border-left: #ff5700 solid 3px;
   box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  }

  /* & + a  significa o se o a que eu estou
  for precedido de outro a ele executa esse css*/
  & + a {
   margin-top: 16px;
  }

  img {
   width: 64px;
   height: 64px;
   border-radius: 50%;
  }

  div {
   margin: 0 16px;
   flex: 1;

   strong {
    font-size: 20px;
    color: #3d3d4d;
   }

   p {
    font-size: 18px;
    color: #a8a8b3;
    margin-top: 4px;
   }
  }

  svg {
   margin-left: auto;
   color: #a8a8b3;
  }
 }
`;
