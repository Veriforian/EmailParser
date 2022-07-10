import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 5rem;
`;

export const Main = styled.main`
  width: 100%;
`;

export const Header = styled.header``;

export const HeadingLarge = styled.h1`
  font-size: 5rem;

  color: ${(props) => props.theme.colorPrimary};

  text-shadow: ${(props) => props.theme.shadowVeryLight};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2.5rem 0;
`;

export const Button = styled.button`
  display: inline-block;
  margin: 0.5rem 0;

  font-size: 1.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 2rem;
  text-align: center;

  padding: 1rem 2rem;
  border: none;
  border-radius: 10rem;
  box-shadow: ${(props) => props.theme.shadowLight};

  color: ${(props) => props.theme.colorLightGray1};
  background-color: ${(props) => props.theme.colorPrimary};

  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const EmailList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;
