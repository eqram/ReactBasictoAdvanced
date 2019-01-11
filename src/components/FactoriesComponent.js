import React, { Component } from 'react';
import { fetchFactories } from '../actions/factoryAction'
import Factory from './FactoryComponent';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import AddFactory from './AddFactory';

class Factories extends Component {

    componentDidMount = () => {
        this.props.fetchFactories();
    }

    render() {
        return (
            <div>
                <h1>Factories</h1>
                <AddFactory />
                {this.props.factories.map(item =>
                    <div key={item.orderFactoryId}>
                        <Factory factoryName={item.orderFactoryName} factoryCode={item.orderFactoryCode} /> <Icon name='edit' onClick= { ()=>{ alert('OK') } } />  <Icon name='delete'/>
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
