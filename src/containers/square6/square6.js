import React, {Component} from 'react';
import {connect} from 'react-redux';
import turnTaken from '../../actions/index';



class Square6 extends Component{
    
render(){
    console.log(this.props);
   if(this.props.territory){
        return(
            <div id='square6Taken'>{this.props.territory}</div>
        )
   }
       console.log(this.props)
        return(
        <div id='square6Free'><button id='square6Button' onClick={()=>this.props.turnTaken(this.props,'square6')}>{this.props.whosTurn}</button></div>
    )
    

}
}


function mapStateToProps(state){
    console.log(state);
    return{
       territory: state.board.square6,
       whosTurn: state.whosTurn,

    };
}





export default connect(mapStateToProps, {turnTaken})(Square6);





