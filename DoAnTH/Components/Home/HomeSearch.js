import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions,TouchableOpacity,TextInput } from 'react-native';
import {COLOR_ORANGE,COLOR_PURPLE,COLOR_GREEN,COLOR_BLUE} from '../../Components/StyleComponent/StylesColor';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width,height} = Dimensions.get('window');
export default class HomeSearch extends Component {
 constructor(props){
   super(props);
   this.addLocal= this.addLocal.bind(this);
 }
Search(){
  alert("huhu");
}
addLocal(){
  this.refs.addLocal.showModal();
}
  render() {
   
    const {container,search,iconSearch,rows,columms,icons,titleIcons,Icon1,Icon2,Icon3,Icon4,titleText,titleTextPink} = styles;
    return (
            <View style={container}>
                <View style={search}>
                <TouchableOpacity onPress={this.addLocal}>
                <View style={{flex:1,flexDirection:'row',borderRadius:12,backgroundColor:'#d9d9d9',justifyContent:'center',alignItems:'center'}}>
                      <Ionicons name="source-commit-start-next-local" size={23} color="#0693e3"  />
                      <Text parentLocal={this} style={{fontSize:12, fontWeight:'400',fontFamily:'Cochin',color:'#0693e3',marginRight:4}}>HCM</Text>
                     
                  </View>
                  </TouchableOpacity>
                <View style={{flex:5,justifyContent:'center',alignItems:'flex-start'}}>
                  <TextInput
                  placeholderTextColor={"#333333"}
                  placeholder={"Tìm quận, tên đường"}
                  // onKeyPress={this.Search.bind(this)}
                  onFocus={this.Search.bind(this)} 
                  // onSubmitEditing={this.onSearch.bind(this)}
                  />
                    {/* <Text style={{marginLeft:5, fontSize:12,fontFamily:'Cochin',color:'#333333',}}>Tìm quận, tên đường</Text> */}
                </View>
                
                </View>
                
                <View style={iconSearch}>
                    <View style={rows}>
                          <View style={columms}>
                              <View style={icons}>
                                  <View style={Icon1}>
                                  <Ionicons name="battery-charging-100" size={25} color="white"  />
                                  </View>                              
                              </View>
                              <View style={titleIcons}>
                                <Text style={titleText}>Tìm phòng gấp</Text>
                              </View>                             
                          </View>
                          <View style={columms}>
                              <View style={icons}>
                                  <View style={Icon2}>
                                  <Ionicons name="near-me" size={25} color="white" />
                                  </View>
                              </View>
                              <View style={titleIcons}>
                              <Text style={titleText}>Tìm gần nơi học & làm</Text>
                              </View>                             
                          </View>
                          <View style={columms}>
                              <View style={icons}>
                                  <View style={Icon3}>
                                  <Ionicons name="account-key" size={25} color="white" />
                                  </View>
                              </View>
                              <View style={titleIcons}>
                              <Text style={titleText}>Không chung chủ</Text>
                              </View>                             
                          </View>
                          <View style={columms}>
                              <View style={icons}>
                                  <View style={Icon4}>  
                                  <Ionicons name="book-multiple-plus" size={25} color="white" />
                                  </View>
                              </View>
                              <View style={titleIcons}>
                              <Text style={titleTextPink}>Đăng phòng</Text>
                              </View>                             
                          </View>
                    </View>
                </View>
            </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      width:width*0.94,
      height:height*0.25,
      marginLeft:12,
      shadowColor: 'gray',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 6,
      borderWidth:1,
      borderRadius:12,
      backgroundColor:'white',
      borderColor:'#ece6e6',
      marginTop:12
        
    },
    search:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'#e8ecee',
      borderWidth:1,
      borderRadius:12,   
      borderColor:'#ece6e6',
      margin:13
    },
    iconSearch:{
      flex:3,
      backgroundColor:'#e8ecee',
      borderTopWidth:1,
      borderColor:'#ece6e6',
      borderBottomLeftRadius:12,
      borderBottomRightRadius:12
    },
    rows:{
      flex:1,
      flexDirection:'row'
     
    },
    columms:{
      flex:1,
      flexDirection:'column'
    },
    icons:{
      flex:2,
      justifyContent:'center',
      alignItems:'center'
    },
    titleIcons:{
      flex:1,
      alignItems:'center'
    },
    Icon1:{
      width:40,
      height:40,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLOR_ORANGE
    },
    Icon2:{
      width:40,
      height:40,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLOR_PURPLE
    },
    Icon3:{
      width:40,
      height:40,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLOR_GREEN
    },
    Icon4:{
      width:40,
      height:40,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLOR_BLUE
    },
    titleText:{
      fontSize:12,
      fontFamily:'Cochin',
      color:'#333333',
      textAlign:'center'
    },
    titleTextPink:{
      fontSize:12,
      fontWeight:'400',
      fontFamily:'Cochin',
      color:"#e91e63"
    }
})
