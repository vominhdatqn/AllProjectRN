import React, { Component} from 'react'
import {View,StyleSheet,FlatList} from 'react-native';
import {connect} from 'react-redux';
import Word from './Word.js';
import Filter from './Filter.js';
import Header from './Header.js';
import Form from './Form.js';
 class Main extends React.Component {
   getWordList(){
     const {myFilter,myWords} = this.props;
     if(myFilter==='MEMORIZED') return myWords.filter(e=>e.memorized);
     if(myFilter==='NEED_PRACTICE') return myWords.filter(e=>!e.memorized);
     return myWords;
   }
  render() {
    const {isAdding} = this.props;
    return (
      <View style={styles.container}>
        <Header />
        {isAdding ? <Form /> : null}
        <View style={styles.body}>
          <FlatList 
                data={this.getWordList()}
                keyExtractor={item=>item.id.toString()}
                renderItem={({item})=><Word myWord={item} />}
              />
        </View>
        <Filter />
      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    myFilter:state.filterStatus,
    myWords:state.arrWords,
    isAdding:state.isAdding
  };
}

export default connect(mapStateToProps)(Main);
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        alignSelf:'stretch',
        justifyContent:'flex-start'     
    },
    body:{
      flex:10
    }   
})
