import PropTypes from 'prop-types';

const Tasks = ({ tasks }) => (
  <>
    {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
  </>

);

Tasks.defaultProps = {
  tasks: [],
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf,
};

export default Tasks;
