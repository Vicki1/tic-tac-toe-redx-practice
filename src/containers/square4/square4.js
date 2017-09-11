import React, {Component} from 'react';
import {connect} from 'react-redux';
import turnTaken from '../../actions/index';



class Square4 extends Component{
    
render(){
    console.log(this.props);
   if(this.props.territory){
        return(
            <div className='square territory square4'>{this.props.territory}</div>
        )
   }
       console.log(this.props)
        return(
        <div className='square square4'><button className='button square4Button' onClick={()=>this.props.turnTaken(this.props,'square4')}>{this.props.whosTurn}</button></div>
    )
    

}
}


function mapStateToProps(state){
    console.log(state);
    return{
       territory: state.square4,
       whosTurn: state.whosTurn,

    };
}





export default connect(mapStateToProps, {turnTaken})(Square4);





