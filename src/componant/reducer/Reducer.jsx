import { DECREMENT, INCREMENT, RESET } from "../constant/Constant";

const initialState={


    count:0,
    name:3
}
const Reducer=(state=initialState,action)=>{
switch (action.type) {
    case INCREMENT:
        return{
            ...state,
            count:state.count+1
        }
       
    case DECREMENT:
        return{
            ...state,
            count:state.count-1
        }
       
    case RESET:
        return{
            ...state,
            count:0
        }
       





    default:
        return state;
}
}
export default Reducer;