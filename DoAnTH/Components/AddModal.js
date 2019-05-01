import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions,Platform } from 'react-native'
import Modal from 'react-native-modalbox'
var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props){
        super(props);
    }
    showModal = () =>{
        this.refs.myLocal.open();
    }
  render() {
    return (
     <Modal
     ref={'myLocal'}
      style={{justifyContent:'center',
        borderRadius:Platform.OS === 'ios' ? 30 : 0,
        shadowRadius:10,
        width:screen.width -80,
        height:280
    }}
     position='center'
     backdrop={true}
     onClosed={()=>{
         alert("Modal Closed");
     }}
     >
        <Text>Chuyển đổi khu vực tìm kiếm</Text>
     </Modal>
    )
  }
}

const styles = StyleSheet.create({})
