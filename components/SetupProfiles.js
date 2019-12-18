import React,{Component} from 'react'
import {View ,Button ,StyleSheet, Text  } from 'react-native'

const styles = StyleSheet.create({

        buttonStyle:{

            flex:1,
            backgroundColor: '#99ccff'

        },

        textStyle: {

            marginTop: 15,
            fontSize: 20,
            color:'#001a00',
            flex: 1,
            textAlign: 'center',
            textAlignVertical: 'center'

        },

        viewButtonStyle:{

            flex:2,
            marginVertical: 10,
            marginHorizontal: 20

        },
    
        viewStyle: {
            
            height: '17%',
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

class SetupProfiles extends React.Component {
    
    /*
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
  */
    render() {
      return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle} >
            Modifica profili di aiuto
          </Text>
          <View style={styles.viewButtonStyle}>
            <Button
              style={styles.buttonStyle}
              title='Vai alle impostazioni'
              onPress={this.handleClick}
            />
          </View>
        </View>
      );
    }
  }
  
  export default SetupProfiles;