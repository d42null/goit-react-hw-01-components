import styled from 'styled-components';

export const Statistic = styled.section`
  text-align: center;
  background-color: #fff;
`;

export const Title = styled.h1`
  padding: 16px;
  font-size: x-large;
  font-weight: 800;
  margin: 0;
  color: #333;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const ListItem = styled.li`
  padding: 4px;
  width: 60px;
  height: 60px;
  box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),
    0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
`;
export const Label = styled.span`
  display: block;
  font-size: large;
  font-weight: 400;
  line-height: normal;
  color: #fff;
`;
export const Percentage = styled.span`
  font-size: x-large;
  font-weight: 500;
  color: #fff;
`;
