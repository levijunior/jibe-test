import styled from 'styled-components';

export const TemplateWrapper = styled.main`
  padding: 50px;
  padding-top: 0;
  display: block;
  position: relative;
  max-width: 1600px;
  margin: auto;

  @media(max-width: 620px) {
    padding: 25px;
  }
`;
