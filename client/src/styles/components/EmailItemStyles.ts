import styled from 'styled-components';
export const Email = styled.div`
  margin: 2rem 0;

  width: 70%;

  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colorPrimaryDark};
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.shadowLight};

  padding: 2rem 3rem;
`;

export const EmailItem = styled.div`
  margin: 0.5rem 0;
  position: relative;

  &::after {
    content: '';

    position: absolute;
    left: 0;
    bottom: -7px;
    transform: translateX(-13%);

    width: 20rem;
    height: 2px;

    background-color: ${(props) => props.theme.colorLightGray3};
  }
  &:last-of-type {
    &::after {
      height: 0;
    }
  }
`;

export const EmailItemLabel = styled.span`
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: ${(props) => props.theme.boldFontWeight};

  color: ${(props) => props.theme.colorLightGray1};
`;

export const EmailItemText = styled.p`
  font-size: 1.7rem;

  color: ${(props) => props.theme.colorLightGray2};
`;

export const DeleteButton = styled.button`
  width: 11rem;

  z-index: 100;
  position: absolute;
  top: 1rem;
  right: 2rem;

  display: inline-block;
  margin: 0.5rem 0;

  font-size: 1.7rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 2rem;
  text-align: center;

  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10rem;
  box-shadow: ${(props) => props.theme.shadowLight};

  color: ${(props) => props.theme.colorLightGray1};
  background-color: ${(props) => props.theme.colorRed};

  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(1px);
  }
`;
