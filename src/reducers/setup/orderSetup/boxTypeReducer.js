const defaultState = {
    boxTypes: [],
    boxType: {
        boxTypeId: '',
        boxTypeName: ''
    },
    loading: false,
}

export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case 'FETCH_BOXTYPES_FULFILLED':
            {
                return {
                    ...state,
                    loading: false,
                    boxTypes: action.payload.data
                }
            }

        case 'FETCH_BOXTYPES_PENDING':
            {
                return {
                    ...state,
                    loading: true
                }
            }

        case 'ADD_BOXTYPE_FULFILLED':
            {
                let savedItem = action.payload.data;
                let currentBoxTypes = state.boxTypes;
                currentBoxTypes.push(savedItem);
                return {
                    ...state,
                    loading: false,
                    boxType: action.payload.data,
                    boxTypes: currentBoxTypes

                }
            }

        case 'ADD_BOXTYPE_PENDING':
            {
                return {
                    ...state,
                    loading: true
                }
            }

        case 'ADD_BOXTYPE_REJECTED':
            {
                return {
                    ...state,
                    loading: false
                }
            }

        case 'UPDATE_BOXTYPE_PENDING':
            {
                return {
                    ...state,
                    loading: true
                }
            }

        case 'UPDATE_BOXTYPE_FULFILLED':
            {
                //let updatedItem = action.payload.data;
                //let currentBoxTypes = state.boxTypes;
                //currentBoxTypes[state.boxTypes.findIndex(x => x.boxTypeId == updatedItem.boxTypeId)].boxType = updatedItem.boxType;
                return {
                    ...state,
                    loading: false,
                    boxType: action.payload.data
                }
            }

        case 'UPDATE_BOXTYPE_REJECTED':
            {
                return {
                    ...state,
                    loading: false,
                    boxType: action.payload.data
                }
            }

        default:
            return state;
    }
}