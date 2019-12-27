import React,{Component} from 'react'
import {View ,Button ,StyleSheet, Text} from 'react-native'

const styles = StyleSheet.create({

        buttonStyle:{

            backgroundColor: '#99ccff'

        },

        viewButtonStyle:{

            flex: 1 ,
            marginHorizontal: 20,
            marginVertical : 10

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

        textStyle: {
            fontSize: 20 ,
            color:'#001a00',
            marginHorizontal: 20,
            marginTop: 10
        }

});

class Modes extends Component {
    
    render () {
        return (
            <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Modalità :</Text>
                <View style={{flexDirection:'row'}} >
                    <View style={styles.viewButtonStyle}>
                        <Button style={styles.buttonStyle} title ='1'/>
                    </View>
                    <View style={styles.viewButtonStyle}>
                        <Button style={styles.buttonStyle} title ='2'/>
                    </View>
                    <View style={styles.viewButtonStyle}>
                        <Button style={styles.buttonStyle} title ='3'/>
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