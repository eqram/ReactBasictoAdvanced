import React from 'react';
import PropTypes from 'prop-types';

const BoxType=(props)=>{
    return(
        <div>
            {props.boxTypeName}
        </div>
    )
}

BoxType.PropTypes={
    boxTypeName:PropTypes.string
}

export default BoxType;