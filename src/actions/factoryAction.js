import { apiClient } from './';

const url = '/api/OrderFactorys';

export function fetchFactories() {
    return dispatch => {
        dispatch({
            type: 'FETCH_FACTORIES',
            payload: apiClient.get(url)
        })
    }
}

export function addFactory(factory){
    return dispatch=> {
        dispatch({
            type:'ADD_FACTORY',
            payload:apiClient.post(url, factory)
        })
    }
}

export function updateFactory(factory){
    return dispatch=> {
        dispatch({
            type:'UPDATE_FACTORY',
            payload:apiClient.put(url, factory)
        })
    }
}


export function fetchFactory(factoryId) {
    return dispatch => {
        dispatch({
            type: 'FETCH_FACTORY',
            payload: apiClient.get()
        })
    }
}

