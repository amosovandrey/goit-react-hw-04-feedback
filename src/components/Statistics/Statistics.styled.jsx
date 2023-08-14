import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 240px;
  gap: 4px;
`;

export const Text = styled.p`
  color: #0e2954;
  font-size: 16px;
  background: #1f6e8c;
  padding: 16px;
  width: 100%;
  border-radius: 8px;
  letter-spacing: 0.05rem;

  &:hover {
    background: #2e8a99;
    cursor: default;
  }
`;
