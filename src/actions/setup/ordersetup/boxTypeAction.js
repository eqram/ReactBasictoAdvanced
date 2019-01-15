import {apiClient} from '../../';


const url='/api/BoxTypes';

export function fetchBoxTypes(){
    return dispatch=>{
        dispatch({
            type:'FETCH_BOXTYPES',
            payload:apiClient.get(url)
        })
    }
}

export function addBoxType(boxType){
    return dispatch=>{
        dispatch({
            type:'ADD_BOXTYPE',
            payload:apiClient.post(url,boxType)
        })
    }
}

export function updateBoxType(boxType) {
    return dispatch => {
        dispatch({
            type: 'UPDATE_BOXTYPE',
            payload: apiClient.put('api/BoxTypes/' + boxType.boxTypeId, boxType)
        })
    }
}