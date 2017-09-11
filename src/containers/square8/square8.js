import React, {Component} from 'react';
import {connect} from 'react-redux';
import turnTaken from '../../actions/index';



class Square8 extends Component{
    
render(){
    console.log(this.props);
   if(this.props.territory){
        return(
            <div className=' square territory square8'>{this.props.territory}</div>
        )
   }
       console.log(this.props)
        return(
        <div className='square square8'><button className='button square8Button' onClick={()=>this.props.turnTaken(this.props,'square8')}>{this.props.whosTurn}</button></div>
    )
    

}
}


function mapStateToProps(state){
    console.log(state);
    return{
       territory: state.square8,
       whosTurn: state.whosTurn,

    };
}





export default connect(mapStateToProps, {turnTaken})(Square8);





