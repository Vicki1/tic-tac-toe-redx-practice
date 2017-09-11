
var initialState={
        whosTurn: 'x',
       board: { 
        square1: '',
        square2: '',
        square3: '',
        square4: '',
        square5: '',
        square6: '',
        square7: '',
        square8: '',
        square9: '',
       }
    }

export default function boardReducer(state=initialState,action){
    switch(action.type){
        
        case 'X_WENT':
        console.log(state);
            return Object.assign({},state,{board:{
                [action.payload]:'x'}, 
                whosTurn: 'o' });
                
            
               


            // return Object.assign({},state,{board: {
            //     [action.payload]:'x'},
            //     whosTurn: 'o' });
        
        case 'O_WENT':
            return Object.assign({},state,{board:{
                [action.payload]:'o'}, 
                whosTurn: 'x' });
       
        
        default:
        console.log(state)
            return state;
    }

   
    
}