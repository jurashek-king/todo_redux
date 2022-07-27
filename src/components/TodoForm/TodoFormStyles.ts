import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
  width: 80%;
  height: 4rem;
  max-width: 50rem;
  min-width: 20rem;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    color: red;
  }

  input {
    width: 40%;
    border: 2px solid #eee;
    border-radius: 1rem;
    text-indent: 0.3rem;

    ::placeholder {
      text-indent: 0.3rem;
    }
  }
`;
