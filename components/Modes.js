import React,{Component} from 'react'
import {View ,Button ,StyleSheet  } from 'react-native'

const styles = StyleSheet.create({

        buttonStyle:{

            backgroundColor: '#99ccff'

        },

        viewButtonStyle:{

            flex:1,
            alignItems: 'center',
            flexDirection: 'row',
            margin: 20

        },
    
        viewStyle: {
            
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

        viewButtonStopStyle:{

            marginHorizontal:20,
            marginBottom:20

        },

});

class Modes extends Component {
    
    render () {
        return (
            <View style={styles.viewStyle}>
                <View style={{flexDirection:'row'}} >
                    <View style={styles.viewButtonStyle}>
                        <Button style={styles.buttonStyle} title ='Modalità 1'/>
                    </View>
                    <View style={styles.viewButtonStyle}>
                        <Button style={styles.buttonStyle} title ='Modalità 2'/>
                    </View>
                    <View style={styles.viewButtonStyle}>
                        <Button style={styles.buttonStyle} title ='Modalità 3'/>
                    </View>
                </View>
                <View style={styles.viewButtonStopStyle}>
                    <Button style={styles.buttonStyle} title ='Blocca il carrellino'/>
                </View>
                
            </View>
        )
    }
};

export default Modes;