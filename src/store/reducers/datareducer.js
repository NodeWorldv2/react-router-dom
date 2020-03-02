import * as Types from '../actions/types'

const init = {
    my_data: [],
    data_is : false
}

const datareducer = (state= init, action)=>{
    switch(action.type){
        case Types.SET_DATA:
            {
                return {
                    my_data: action.payload.my_data,
                    data_is: Object.keys(action.payload.my_data).length !== 0
                }

            }
        default:
            return state;
    }
}

export default datareducer