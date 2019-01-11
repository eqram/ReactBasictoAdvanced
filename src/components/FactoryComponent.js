import React from 'react';
import PropTypes from 'prop-types';

const Factory = (props) =>{
    return (
        <div>
            {props.factoryName} - {props.factoryCode}
        </div>
    )
}

Factory.propTypes={
    factoryName:PropTypes.string,
    factoryCode:PropTypes.string
}

export default Factory;