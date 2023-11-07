import PropTypes from 'prop-types';
import {
  Label,
  ListItem,
  Percentage,
  StatList,
  Statistic,
  Title,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => (
  <Statistic>
    {title && <Title>{title}</Title>}
    <StatList>
      {stats.map(stat => (
        <ListItem
          key={stat.id}
          style={{
            backgroundColor: `#${Math.floor(16777215 * Math.random())
              .toString(16)
              .padStart(6, 0)}`,
          }}
        >
          <Label>{stat.label}</Label>
          <Percentage>{stat.percentage}%</Percentage>
        </ListItem>
      ))}
    </StatList>
  </Statistic>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ).isRequired,
};
