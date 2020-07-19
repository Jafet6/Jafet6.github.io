import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent, onClick } = props;
  const { title, content, timeSeconds } = props.children;
  console.log(props.children)
  setTimeout(() => hideComponent(), timeSeconds);
  return (
    <div className='Alert'>
      <h1>{title}</h1>
      {content.map((e) => (
        <p type="text" onClick={onClick} name={e.item} key={e.id}>{e.item}</p>
      ))}
    </div>
  )
}


Alert.defaultProps = {
  children: {
    title: 'Habilidades',
  }
}

Alert.propTypes = {
  hideComponent: PropTypes.func,
  children: PropTypes.node.isRequired,
  children: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.number,
      item: PropTypes.string,
    })),
    timeSeconds: PropTypes.number,
  })
}

export default Alert;
