import React,{Component} from 'react'
import {View ,Button ,StyleSheet, Text  } from 'react-native'

const styles = StyleSheet.create({

        buttonStyle:{

            flex:1,
            backgroundColor: '#99ccff'

        },

        textStyle: {

            marginTop: 20,
            fontSize: 20,
            color:'#001a00',
            flex: 1,
            textAlign: 'center',
            textAlignVertical: 'center'

        },

        viewButtonStyle:{

            flex:2,
            margin: 20,

        },
    
        viewStyle: {
            
            height: '22%',
            flexDirection: 'column',
            backgroundColor:'white',
            margin: 10,
            borderRadius: 5,
            shadowColor: "#000",
            shadowOffset:{
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6
        },

});

class Locker extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        acceso: 'false',
      };
    }
  
    handleClick=()=> {
      this.setState({
        acceso: !this.state.acceso,
      });
    }
  
    render() {
      return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle} >
            Modalità lucchetto: {this.state.acceso ? 'Attiva' : 'Disattiva'}
          </Text>
          <View style={styles.viewButtonStyle}>
            <Button
              style={styles.buttonStyle}
              className= "Locker"            
              title={this.state.acceso ? 'Disattiva' : 'Attiva'}
              onPress={this.handleClick}
            />
          </View>
        </View>
      );
    }
  }
  
  export default Locker;