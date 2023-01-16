import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header className="header">
    <h1>{title}</h1>

  </header>
);

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
