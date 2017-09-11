import React, {Component} from 'react';
import {connect} from 'react-redux';
import turnTaken from '../../actions/index';



class Square1 extends Component{
    
render(){
    console.log(this.props);

   if(this.props.territory){
        return(
            <div className='square territory square1'>{this.props.territory}</div>
        )
   }
       console.log(this.props)
        return(
        <div className='square square1'><button className=' button square1Button' onClick={()=>this.props.turnTaken(this.props,'square1')}>{this.props.whosTurn}</button></div>
    )
    

}
}


function mapStateToProps(state){
  
    return{
       territory: state.square1,
       whosTurn: state.whosTurn,

    };
}




export default connect(mapStateToProps, {turnTaken})(Square1);







