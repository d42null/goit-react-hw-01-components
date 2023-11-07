import styled from 'styled-components';
export const ProFile = styled.div`
  box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),
    0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
`;

export const Description = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 16px;
`;
export const Avatar = styled.img`
  display: inline-block;
  max-width: 120px;
  height: auto;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: xx-large;
  font-weight: 700;
  margin-bottom: 16px;
`;
export const Tag = styled.p`
  font-size: medium;
  font-weight: 500;
  color: #666;
  margin-bottom: 8px;
`;
export const Location = styled.p`
  font-size: large;
  font-weight: 500;
  color: #666;
`;
export const Stats = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;
export const StatsItem = styled.li`
  text-align: center;
  padding: 4px;
  flex-basis: 33%;
  height: 80px;
  background-color: #eee;
  box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),
    0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
`;
export const Label = styled.span`
  font-size: medium;
  color: #666;
  display: block;
  padding: 4px 0 0;
`;
export const Quantity = styled.span`
  font-size: x-large;
  font-weight: 800;
`;
