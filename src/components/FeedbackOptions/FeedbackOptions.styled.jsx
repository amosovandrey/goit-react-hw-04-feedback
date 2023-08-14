import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;

  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: #1f6e8c;
  outline: none;
  padding: 8px;
  min-width: 72px;
  font-weight: light;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #0e2954;
  color: #ffffff;
  cursor: pointer;
  letter-spacing: 0.05rem;
  transition: 250ms ease;

  &:hover {
    background: #2e8a99;
    color: #0e2954;
    transform: scale(1.05);
    border: 2px solid #1f6e8c;
  }
`;
