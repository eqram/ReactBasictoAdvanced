import React, { Component } from 'react';
import { fetchFactories, addFactory, updateFactory } from '../actions/factoryAction'
import { Input, Segment, Button, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

class AddFactory extends Component {

    state = {
        factoryName: '',
        factoryCode: ''
    }

    componentDidMount = () => {

    }

    componentWillReceiveProps = (nextprops) => {
        if (nextprops.isEdit) {
            this.setState({
                factoryName: nextprops.factory.orderFactoryName,
                factoryCode: nextprops.factory.orderFactoryCode,
            })
        }
    }

    inputHandler = (e) => {
        console.log(e);
        switch (e.target.name) {

            case 'factoryName':
                this.setState({
                    factoryName: e.target.value
                });
                break;

            case 'factoryCode':
                this.setState({
                    factoryCode: e.target.value
                });
                break;
            default:

        }
    }

    DoClick = () => {
        var self = this;
        let factory;
        if (self.props.isEdit) {
            factory = {
                orderFactoryName: self.state.factoryName,
                orderFactoryCode: self.state.factoryCode,
                countryid: self.props.factory.countryid,
                orderFactoryId: self.props.factory.orderFactoryId,
                orderFactoryStratPoint: self.props.factory.orderFactoryStratPoint,
            };
            self.props.updateFactory(factory);
        }
        else {
            factory = {
                orderFactoryName: self.state.factoryName,
                orderFactoryCode: self.state.factoryCode,
                countryid: '4'
            };
            self.props.addFactory(factory);
        }        
    }

    render() {


        const { factoryName, factoryCode } = this.state;


        return (
            <Segment>
                <h1>Add Factory</h1>
                <Segment>
                    <Loader active={this.props.loading}> Please Wait </Loader>
                    <Input name='factoryName' placeholder='Enter Factory Name' value={factoryName} onChange={this.inputHandler} />
                    <Input name='factoryCode' placeholder='Enter Factory Code' value={factoryCode} onChange={this.inputHandler} />
                    <Button onClick={this.DoClick}> {this.props.isEdit ? 'Edit' : 'Add'} </Button>
                    <Button onClick={this.DoClick} style={{ display: this.props.isEdit ? 'block' : 'none' }}>Add New</Button>
                </Segment>
            </Segment>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.factoryStore.loading
    }
}

export default connect(mapStateToProps, { fetchFactories, addFactory, updateFactory })(AddFactory);
