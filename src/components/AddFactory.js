import React, { Component } from 'react';
import { fetchFactories, addFactory } from '../actions/factoryAction'
import { Input, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

class AddFactory extends Component {

    state = {
        factoryName: '',
        factoryCode: ''
    }

    componentDidMount = () => {

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

    DoClick=()=>{    
            let factory = {
                orderFactoryName:this.state.factoryName,
                orderFactoryCode:this.state.factoryCode,
                countryid:'4'
            };

            this.props.addFactory(factory);
    }

    render() {
        const { factoryName, factoryCode } = this.state;
        return (
            <Segment>
                <h1>Add Factory</h1>
                <Segment>
                    <Input name='factoryName' placeholder='Enter Factory Name' value={factoryName} onChange={this.inputHandler} />
                    <Input name='factoryCode' placeholder='Enter Factory Code' value={factoryCode} onChange={this.inputHandler} />
                    <Button onClick={this.DoClick}>Add</Button>
                    
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

export default connect(mapStateToProps, { fetchFactories, addFactory })(AddFactory);
