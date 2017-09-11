import React, {Component} from 'react';
import {connect} from 'react-redux';
import turnTaken from '../../actions/index';



class Square7 extends Component{
    
render(){
    console.log(this.props);
   if(this.props.territory){
        return(
            <div id='square7Taken'>{this.props.territory}</div>
        )
   }
       console.log(this.props)
        return(
        <div id='square7Free'><button id='square7Button' onClick={()=>this.props.turnTaken(this.props,'square7')}>{this.props.whosTurn}</button></div>
    )
    

}
}


function mapStateToProps(state){
    console.log(state);
    return{
       territory: state.board.square7,
       whosTurn: state.whosTurn,

    };
}





export default connect(mapStateToProps, {turnTaken})(Square7);





