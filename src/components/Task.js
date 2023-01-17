import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => (
  <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
    <h3>
      {task.text}
      {' '}
      <FaTimes
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => onDelete(task.id)}
      />
    </h3>
    <p>{task.day}</p>

  </div>
);

Task.defaultProps = {
  task: {},
  onDelete: 'onDelete',
  onToggle: 'onToggle',
};

Task.propTypes = {
  task: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    day: PropTypes.string,
    reminder: PropTypes.bool,
  })),
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

export default Task;
