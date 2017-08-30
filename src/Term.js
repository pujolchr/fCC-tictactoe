import React, { Component } from 'react';
import PropTypes from 'prop-types';

// no Array index in key so:
const LINES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

class TermForm extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onTerm(`> ${this.state.value}`);
    this.setState({ value: '' });
  }

  render() {
    return (
      <tr>
        <td className="term-row">
          <form className="term-form" onSubmit={this.handleSubmit}>
            <label htmlFor="cli">
              <span>&gt;&nbsp;</span>
              <input id="cli" type="text" onChange={this.handleChange} value={this.state.value} />
            </label>
          </form>
        </td>
      </tr>
    );
  }
}
TermForm.propTypes = {
  onTerm: PropTypes.func.isRequired,
};
function TermRow(props) {
  return (
    <tr>
      <td className="term-row">
        {props.text === ' ' ? (<span>&nbsp;</span>) : props.text}
      </td>
    </tr>
  );
}
TermRow.propTypes = {
  text: PropTypes.string.isRequired,
};

function Term(props) {
  let rows = props.term.map((t, i) => <TermRow text={t} key={`line-${LINES[i]} `} />);
  for (let i = rows.length; i < 9; i += 1) {
    rows = rows.concat(<TermRow text=" " key={`term-row-${i}`} />);
  }

  return (
    <div className="term">
      <table>
        <tbody>
          {rows}
          <TermForm onTerm={props.onTerm} />
        </tbody>
      </table>
    </div>
  );
}

Term.propTypes = {
  term: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTerm: PropTypes.func.isRequired,
};

export default Term;

