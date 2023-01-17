import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => (
  <>
    {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
    ))}
  </>

);

Tasks.defaultProps = {
  tasks: [],
  onDelete: 'onDelete',
  onToggle: 'onToggle',
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    day: PropTypes.string,
    reminder: PropTypes.bool,
  })),
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

export default Tasks;
