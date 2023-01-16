import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => (<button onClick={onClick} type="submit" className="btn" style={{ backgroundColor: color }}>{text}</button>);

Button.defaultProps = {
  text: 'Add',
  color: 'steelblue',
  onClick: 'onClick',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
