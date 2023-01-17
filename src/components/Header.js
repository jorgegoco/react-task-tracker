import PropTypes, { bool } from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}

    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
  onAdd: 'onAdd',
  showAdd: false,
};

Header.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
  showAdd: bool,
};

export default Header;
