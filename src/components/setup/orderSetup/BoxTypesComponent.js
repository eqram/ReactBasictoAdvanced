import React, { Component } from 'react';
import { fetchBoxTypes } from '../../../actions/setup/ordersetup/boxTypeAction';
import BoxType from './BoxTypeComponent';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import AddBoxType from './AddBoxTypeComponent';

class BoxTypes extends Component {
    state = {
        isEdit: false,
        boxType: {
            boxTypeId: 0,
            boxType: ""
        }
    }

    componentDidMount = () => {
        this.props.fetchBoxTypes();
    }

    editBoxType = (item) => {
        let localBoxType = {
            boxTypeId: item.boxTypeId,
            boxType: item.boxType
        }
        this.setState({
            isEdit: true,
            boxType: localBoxType
        });
    }

    render() {
        return (
            <div>
                <h1>Box Types</h1>
                <AddBoxType isEdit={this.state.isEdit} boxType={this.state.boxType} />
                {this.props.boxTypes.map(item =>
                    <div key={item.boxTypeId}>
                        <BoxType boxTypeName={item.boxType} /> <Icon name='edit' link onClick={() => { this.editBoxType(item) }} />  <Icon name='delete' link />
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        boxTypes: state.boxTypeStore.boxTypes,
        loading: state.boxTypeStore.loading
    }
}

export default connect(mapStateToProps, { fetchBoxTypes })(BoxTypes);

