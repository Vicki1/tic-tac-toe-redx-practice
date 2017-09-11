import React, {Component} from 'react';
import {connect} from 'react-redux';
import turnTaken from '../../actions/index';



class Square5 extends Component{
    
render(){
    console.log(this.props);
   if(this.props.territory){
        return(
            <div id='square5Taken'>{this.props.territory}</div>
        )
   }
       console.log(this.props)
        return(
        <div id='square5Free'><button id='square5Button' onClick={()=>this.props.turnTaken(this.props,'square5')}>{this.props.whosTurn}</button></div>
    )
    

}
}


function mapStateToProps(state){
    console.log(state);
    return{
       territory: state.board.square5,
       whosTurn: state.whosTurn,

    };
}





export default connect(mapStateToProps, {turnTaken})(Square5);





