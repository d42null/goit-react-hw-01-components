import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: #fefefe;
  box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),
    0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
`;
export const Status = styled.span`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  display: block;
  width: 48px;
  border-radius: 20%;
  padding: 4px;
  border: 2px solid #eee;
`;
export const Name = styled.p`
  font-size: x-large;
  font-weight: 600;
`;
