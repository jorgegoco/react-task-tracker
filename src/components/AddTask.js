import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">
          Task
          <input name="text" type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="day">
          Day & Time
          <input name="day" type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
        </label>
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">
          Set Reminder
          <input name="reminder" type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </label>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

AddTask.defaultProps = {
  onAdd: 'onAdd',
};

AddTask.propTypes = {
  onAdd: PropTypes.func,
};

export default AddTask;
