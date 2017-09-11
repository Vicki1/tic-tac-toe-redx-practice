import React, {Component} from 'react';
import {connect} from 'react-redux';
import turnTaken from '../../actions/index';



class Square9 extends Component{
    
render(){
    console.log(this.props);
   if(this.props.territory){
        return(
            <div className='square territory square9'>{this.props.territory}</div>
        )
   }
       console.log(this.props)
        return(
        <div className='square square9'><button className='button square9Button' onClick={()=>this.props.turnTaken(this.props,'square9')}>{this.props.whosTurn}</button></div>
    )
    

}
}


function mapStateToProps(state){
    console.log(state);
    return{
       territory: state.square9,
       whosTurn: state.whosTurn,

    };
}





export default connect(mapStateToProps, {turnTaken})(Square9);





