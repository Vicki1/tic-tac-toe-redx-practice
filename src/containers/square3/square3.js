import React, {Component} from 'react';
import {connect} from 'react-redux';
import turnTaken from '../../actions/index';



class Square3 extends Component{
    
render(){
    console.log(this.props);
   if(this.props.territory){
        return(
            <div className='square territory square3'>{this.props.territory}</div>
        )
   }
       console.log(this.props)
        return(
        <div className='square square3'><button className='button square3Button' onClick={()=>this.props.turnTaken(this.props,'square3')}>{this.props.whosTurn}</button></div>
    )
    

}
}


function mapStateToProps(state){
    console.log(state);
    return{
       territory: state.square3,
       whosTurn: state.whosTurn,

    };
}





export default connect(mapStateToProps, {turnTaken})(Square3);





