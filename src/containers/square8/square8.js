import React, {Component} from 'react';
import {connect} from 'react-redux';
import turnTaken from '../../actions/index';



class Square8 extends Component{
    
render(){
    console.log(this.props);
   if(this.props.territory){
        return(
            <div id='square8Taken'>{this.props.territory}</div>
        )
   }
       console.log(this.props)
        return(
        <div id='square8Free'><button id='square8Button' onClick={()=>this.props.turnTaken(this.props,'square8')}>{this.props.whosTurn}</button></div>
    )
    

}
}


function mapStateToProps(state){
    console.log(state);
    return{
       territory: state.board.square8,
       whosTurn: state.whosTurn,

    };
}





export default connect(mapStateToProps, {turnTaken})(Square8);





