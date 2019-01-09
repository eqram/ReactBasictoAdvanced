import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    return (
      <Paper style={{ width: '15%' }}>
        <span> {this.props.id} </span>
        <TextField name='taskTest' value={this.props.name} />
        <Button name='btnDel' onClick={this.props.doDelete}> Delete </Button>
      </Paper>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  doDelete: PropTypes.func,
};

export default TodoItem;
