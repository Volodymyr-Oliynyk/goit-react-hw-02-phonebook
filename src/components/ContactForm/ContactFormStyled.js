import styled from "styled-components";
import { Form, Field } from 'formik';

export const ContactFormStyled = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContactLabel = styled.label`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  margin-bottom: 20px;
  color: #0000ff;
`;

export const ContactField = styled(Field)`
  box-sizing: border-box;
  min-width: 300px;
  padding-left: 20px;
  height: 40px;
  font-family: inherit;
  border: none;
  outline: none;
  border-radius: .5rem;
  box-shadow: inset .2rem .2rem .5rem #FFFFFF;
  background: #6178EA;
  color: #0000ff;
  :focus { 
      outline: none; 
      box-shadow: .3rem .3rem .6rem #0000ff,  -.2rem -.2rem .5rem #c2c2c2; 
  }
`;