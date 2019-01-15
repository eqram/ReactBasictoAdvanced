const defaultState = {
    factories: [],
    factory: {
        factoryId: '',
        factoryName: '',
        factoryCode: ''
    },
    loading: false,

}

export default (state = defaultState, action = {}) => {
    switch (action.type) {

        case 'ADD_FACTORY_FULFILLED':
            {
                let savedItem = action.payload.data;
                let currentFactories = state.factories;
                currentFactories.push(savedItem);
                return {
                    ...state,
                    loading: false,
                    factory: action.payload.data,
                    factories: currentFactories

                }
            }

        case 'UPDATE_FACTORY_PENDING':
            {
                return {
                    ...state,
                    loading: true
                }
            }

        case 'UPDATE_FACTORY_FULFILLED':
            {
                let updatedItem = action.payload.data;
                let currentFactories = state.factories;
                let index = state.factories.findIndex(x => x.orderFactoryId == updatedItem.orderFactoryId);
                currentFactories[index].orderFactoryName = updatedItem.orderFactoryName;
                currentFactories[index].orderFactoryCode = updatedItem.orderFactoryCode;
                return {
                    ...state,
                    loading: false,
                    factory: action.payload.data
                }
            }

        case 'UPDATE_FACTORY_REJECTED':
            {
                return {
                    ...state,
                    loading: false,
                    factory: action.payload.data
                }
            }

        case 'ADD_FACTORY_PENDING':
            {
                return {
                    ...state,
                    loading: true
                }
            }

        case 'ADD_FACTORY_REJECTED':
            {
                return {
                    ...state,
                    loading: false
                }
            }



        case 'FETCH_FACTORIES_FULFILLED':
            {
                return {
                    ...state,
                    loading: false,
                    factories: action.payload.data
                }
            }

        case 'FETCH_FACTORIES_PENDING':
            {
                return {
                    ...state,
                    loading: false
                }
            }

        default:
            return state;
    }
}