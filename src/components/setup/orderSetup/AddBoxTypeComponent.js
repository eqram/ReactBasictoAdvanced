import React, { Component } from 'react';
import { fetchBoxTypes, addBoxType,updateBoxType } from '../../../actions/setup/ordersetup/boxTypeAction';
import { Input, Segment, Button, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

class AddBoxType extends Component {

    state = {
        boxTypeName: ''
    }

    componentDidMount = () => {

    }

    componentWillReceiveProps = (nextprops) => {
        if (nextprops.isEdit) {
            this.setState({
                boxTypeName: nextprops.boxType.boxType
            })
        }
    }

    inputHandler = (e) => {
        this.setState({
            boxTypeName: e.target.value
        })
    }

    DoClick = () => {
        var that = this;
        let boxType;
        if (that.props.isEdit) {
            boxType = {
                boxType: that.state.boxTypeName,
                boxTypeId: that.props.boxType.boxTypeId,
            };
            that.props.updateBoxType(boxType);
        }
        else{
            boxType = {
                boxType: that.state.boxTypeName
            };
            that.props.addBoxType(boxType);
        }
    }

    render() {

        const { boxTypeName } = this.state;
        return (
            <Segment>
                <h1>Add Box Type</h1>
                <Segment>
                    <Loader active={this.props.loading}>Please Wait</Loader>
                    <Input name='boxTypeName' placeholder='Enter Box Type' value={boxTypeName} onChange={this.inputHandler} />
                    <Button onClick={this.DoClick}>{this.props.isEdit ? 'Edit' : 'Add'}</Button>
                    <Button onClick={this.DoClick} style={{ display: this.props.isEdit ? 'block' : 'none' }}>Add New</Button>
                </Segment>
            </Segment>
        )
    }
}

function mapStateToProps(state) {
    return {
        loading: state.boxTypeStore.loading
    }
}

export default connect(mapStateToProps, { fetchBoxTypes, addBoxType,updateBoxType })(AddBoxType);