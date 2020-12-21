import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#00bfff',
      flex: 1,
       //margin: 'auto',
      width: '100%',
      flexDirection: 'column',
      paddingTop: '15%',
      //marginTop: StatusBar.currentHeight || 250,
    },
    item: {
      // flex: 1,
      flexDirection: 'row',
      backgroundColor: '#00ffff',
      padding: 8,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      // flex: 1,
      fontSize: 24,
    },
    content: {
      flex: 1,
       //margin: 'auto',
      width: '100%',
      flexDirection: 'column',
      paddingTop: '12%',
      //marginTop: StatusBar.currentHeight || 250,
    },
    index: {
      fontSize: 24,
    },
    down:{
      marginTop: StatusBar.currentHeight || 40,
    },
    input: {
      
      // padding: 12,
      // borderRadius: 8,
      // width:'70%',
      // color: "#666",
      // backgroundColor: "#eaeaea",
      alignItems: 'center',
    },
    AddContainer: {
      backgroundColor: '#00bfff',
      flex: 1,
       //margin: 'auto',
      width: '100%',
      flexDirection: 'column',
      paddingTop: '15%',
      //marginTop: StatusBar.currentHeight || 250,
    },
    form: {
      flex: 1,
      backgroundColor:'#003f5c',
      // flexDirection: 'column',
      // alignItems:'center',
      justifyContent: 'center',
      // padding: 35,
      // marginTop: StatusBar.currentHeight || 0,
    },
    inputStyle: {
      // width: '80%',
      // marginBottom: 15,
      // paddingBottom: 15,
      // alignSelf: "center",
      // borderColor: "#ccc",
      // borderBottomWidth: 1,
      height:50,
      color:"white",
    },
    headerStyle: {
      height: 70,
      
    },
    headerText :{
      marginTop:10,
      marginLeft: 15,
      fontSize: 40,
      fontWeight: 'bold',
      flexDirection:'row',
      alignSelf:'center',
      color:'white',
    },
    checkbox:{
      flexDirection: 'column', 
      marginTop:12,
      marginLeft:10,
    },
    checkboxText:{
      marginTop:7,
      color:'white',
    },
    subtitle:{
      fontSize:20,
      marginLeft:38,
      marginTop:12,
      color:'white',
    },
    NewAlarmInputBtn:{
      width:'80%',
      backgroundColor:'#fb5b5a',
      borderRadius:25,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      marginTop:40,
      marginBottom:10,
      alignSelf:'center',
    },
    NewAlarmInputView:{
      width:'80%',
      backgroundColor:'#465881',
      borderRadius:25,
      height:50,
      marginBottom:20,
      marginTop:20,
      justifyContent:'center',
      padding:20,
      alignSelf:'center',
    },
    NewAlarmDivider:{
      width: '80%',
      backgroundColor:'gray',
      marginTop:20,
      marginBottom:20,
      alignSelf:'center'
    },
    NewAlarmChooseTimeView:{
      fontSize:20,
      color:'white',
      marginTop:5,
      
    },
    


  
  });
export default styles;