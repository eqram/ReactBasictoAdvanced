import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';


function DumbTodoItem(props) {
    return (
        <Paper style={{ width: '15%' }}>
            <span> {props.id} </span>
            <TextField name='taskTest' value={props.name} />
            <Button name='btnDel' onClick={props.doDelete}> Delete </Button>
        </Paper>
    );
}

DumbTodoItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    doDelete: PropTypes.func,
};

export default DumbTodoItem;
