import { down } from 'styled-breakpoints';
import styled from '@emotion/styled';

export const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  min-height: 100vh;
  padding: 0 0.5rem;
`;

export const ContentContainer = styled.main`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 0;
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.15;
  margin: 0;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
`;

export const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
    monospace;
  font-size: 1.1rem;
  padding: 0.75rem;
`;

export const GridContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
  max-width: 800px;

  ${down('sm')} {
    .grid {
      flex-direction: column;
      width: 100%;
    }
  }
`;

export const CardContainer = styled.a`
  border: 1px solid #eaeaea;
  border-radius: 10px;
  color: inherit;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 45%;
`;

export const Footer = styled.div`
  align-items: center;
  border-top: 1px solid #eaeaea;
  display: flex;
  height: 100px;
  justify-content: center;
  width: 100%;

  a {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }
`;

export const LogoContainer = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;
