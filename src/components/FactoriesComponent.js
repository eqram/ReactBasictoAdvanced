import React, { Component } from 'react';
import { fetchFactories } from '../actions/factoryAction'
import Factory from './FactoryComponent';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import AddFactory from './AddFactory';

class Factories extends Component {

    state = {
        isEdit: false,
        factory:{
            orderFactoryId: 0,
            orderFactoryName: "",
            orderFactoryCode: "",
            orderFactoryStratPoint: "",
            countryid: ""
        }
    }

    componentDidMount = () => {
        this.props.fetchFactories();
    }

    /*

    orderFactoryId: 1
    orderFactoryName: "ECHOTEX"
    orderFactoryCode: "ETEX"
    orderFactoryStratPoint: "6972"
    countryid: "3"

    */

    editFactory = (item) => {
        let localFactory={
            orderFactoryId: item.orderFactoryId,
            orderFactoryName: item.orderFactoryName,
            orderFactoryCode: item.orderFactoryCode,
            orderFactoryStratPoint: item.orderFactoryStratPoint,
            countryid: item.countryid
        }
        this.setState({
            isEdit: true,
            factory:localFactory
        });

        console.log(item);
    }

    render() {
        return (
            <div>
                <h1>Factories</h1>
                <AddFactory isEdit={this.state.isEdit} factory={this.state.factory} />
                {this.props.factories.map(item =>
                    <div key={item.orderFactoryId}>
                        <Factory factoryName={item.orderFactoryName} factoryCode={item.orderFactoryCode} /> <Icon name='edit' link onClick={() => { this.editFactory(item) }} />  <Icon name='delete' link />
                    </div>
                )
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        factories: state.factoryStore.factories,
        loading: state.factoryStore.loading
    }
}

export default connect(mapStateToProps, { fetchFactories })(Factories);
