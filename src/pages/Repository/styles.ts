import styled from 'styled-components';

export const Header = styled.header`
 display: flex;
 align-items: center;
 justify-content: space-between;

 a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #a8a8b3;
  transition: color 0.2s;

  &:hover {
   color: #666;
  }

  svg {
   margin-right: 4px;
  }
 }
`;

export const RepositoryInfo = styled.section`
 margin-top: 50px;

 header {
  display: flex;
  align-items: center;

  img {
   width: 120px;
   height: 120px;
   border-radius: 50%;
  }

  div {
   margin-left: 24px;

   strong {
    font-size: 36px;
    color: #3d3d4d;
   }

   p {
    font-size: 18px;
    color: #737380;
    margin-top: 4px;
   }
  }
 }

 ul {
  display: flex;
  list-style: none;
  margin-top: 40px;

  li {
   /* & representa o elemento que eu estou que neste caso é um li
    o + li representa precedido de um elemento li */
   & + li {
    margin-left: 80px;
   }

   strong {
    display: block;
    font-size: 36px;
    color: #3d3d4d;
   }

   span {
    display: block;
    margin-top: 4px;
    color: #6c6c80;
   }
  }
 }
`;

export const Issues = styled.div`
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
