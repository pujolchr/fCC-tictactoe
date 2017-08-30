import React from 'react';
import PropTypes from 'prop-types';

const CONTROL_COMMAND = [['> set X', 'fa-times'],
                         ['> set O', 'fa-circle-o'],
                         ['> reset', 'fa-refresh'],
                         ['> help', 'fa-question'],
                         ['> gui', 'fa-terminal'],
                         ['> about', 'fa-copyright']];

function ControlBtn(props) {
  return (
    <button className="control-btn" onClick={() => props.onClick(props.value)}>
      <i className={props.icon} aria-hidden="true" />
    </button>
  );
}

ControlBtn.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

function ControlBoard(props) {
  return (
    <div id="control-board" className="board control-board">
      {CONTROL_COMMAND.map(item => (
        <ControlBtn
          key={`command-${item[1]}`}
          value={item[0]}
          icon={`fa ${item[1]}`}
          onClick={props.onClick}
        />))}
    </div>
  );
}

ControlBoard.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ControlBoard;
