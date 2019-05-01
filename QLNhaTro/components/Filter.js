import React, { Component} from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {connect} from 'react-redux';

 class Filter extends React.Component {
     getTextStyle(statusName){
       const {myFilterStatus} = this.props;
       if(statusName===myFilterStatus) return {color:'pink',fontWeight:'bold'};
       return styles.btnFooter;
     }
     setFilterStatus(actionType){
       this.props.dispatch({type:actionType})
     }
  render() {
     
    return (
        <View style={styles.footer}>
        <TouchableOpacity onPress={()=>this.setFilterStatus('FILTER_SHOW_ALL')}>
          <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setFilterStatus('FILTER_MEMORIZED')}>
          <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setFilterStatus('FILTER_NEED_PRACTICE')}>
          <Text style={this.getTextStyle('NEED_PRACTICE')}>NEED PRACTIVE</Text>
        </TouchableOpacity>
    </View>
    )
  }
}
function mapStateToProps(state){
    return {myFilterStatus:state.filterStatus};
}
export default connect(mapStateToProps)(Filter);
const styles= StyleSheet.create({
    footer:{
        flex:1,
        flexDirection:'row',
        backgroundColor:"skyblue",
        alignItems: 'center',
        justifyContent: 'space-around'
        
      },
      btnFooter:{
          color:'white'
      }
})
