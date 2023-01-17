import PropTypes, { bool } from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => (
  <header className="header">
    <h1>{title}</h1>
    <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />

  </header>
);

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
