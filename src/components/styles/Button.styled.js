import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  padding: 15px 60px;
  background: ${({ bg, theme }) => bg || theme.colors.pink};
  color: ${({ color }) => color || '#fff'};
  border: ${({ border }) => (border ? `1px solid ${border}` : 'none')};

  &:hover {
    opacity: 0.9;
    transform: scale(0.97);
  }
`;
