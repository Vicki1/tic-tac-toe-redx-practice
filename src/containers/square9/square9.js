import React, {Component} from 'react';
import {connect} from 'react-redux';
import turnTaken from '../../actions/index';



class Square9 extends Component{
    
render(){
    console.log(this.props);
   if(this.props.territory){
        return(
            <div id='square9Taken'>{this.props.territory}</div>
        )
   }
       console.log(this.props)
        return(
        <div id='square9Free'><button id='square9Button' onClick={()=>this.props.turnTaken(this.props,'square9')}>{this.props.whosTurn}</button></div>
    )
    

}
}


function mapStateToProps(state){
    console.log(state);
    return{
       territory: state.board.square9,
       whosTurn: state.whosTurn,

    };
}





export default connect(mapStateToProps, {turnTaken})(Square9);





