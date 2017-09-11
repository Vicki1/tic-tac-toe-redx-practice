import React, {Component} from 'react';
import {connect} from 'react-redux';
import turnTaken from '../../actions/index';



class Square2 extends Component{
    
render(){
    console.log(this.props);
   if(this.props.territory){
        return(
            <div id='square2Taken'>{this.props.territory}</div>
        )
   }
       console.log(this.props)
        return(
        <div id='square2Free'><button id='square2Button' onClick={()=>this.props.turnTaken(this.props,'square2')}>{this.props.whosTurn}</button></div>
    )
    

}
}


function mapStateToProps(state){
    console.log(state);
    return{
       territory: state.board.square2,
       whosTurn: state.whosTurn,

    };
}





export default connect(mapStateToProps, {turnTaken})(Square2);





