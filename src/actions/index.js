


export default function turnTaken(state, squareId){
    if (state.whosTurn === 'o'){
        return{
        type: 'O_WENT',
        payload : squareId
        };
    }
    else if (state.whosTurn=== 'x'){
        return {
        type: 'X_WENT',
        payload: squareId
        }
    }
    else {
        return state;
    }
        
    }