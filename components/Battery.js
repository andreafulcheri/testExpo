import React,{Component} from 'react'
import {View ,Text ,StyleSheet , Animated } from 'react-native'

const styles = StyleSheet.create({

        textStyle: {

            fontSize: 20,
            color:'#001a00',
            flex: 1,
            textAlign: 'center',
            textAlignVertical: 'center'

        },
    
        viewStyle: {
            
            height: '20%',
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

        viewStyleProgress: {
            
            flexDirection: 'row',
            height: '30%',
            backgroundColor:'white',
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 5,
            shadowColor: "#000",
            shadowOffset:{
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
        },
        
        styleAnimate:{
            ...StyleSheet.absoluteFill,
            backgroundColor: 'red', 
            width: '10%',
            borderRadius: 5
        }

});

class Battery extends Component {
    
    color (props) {

        var num = parseFloat(this.props.carica);
        
        if(num > 80 ){
            return ('#00ff00')
        }else if (num > 40) {
            return ('#ffff00')
        }else {
            return ('#ff3300')
        }
    }
    
    render () {
        return (
            <View style={styles.viewStyle} >
                <View style={styles.viewStyleProgress}>
                    <Animated.View style={[styles.styleAnimate, {width: this.props.carica}, {backgroundColor: this.color(this.props)}]}/>
                </View>
                <Text style= {styles.textStyle}>La batteria è carica al {this.props.carica}</Text>
            </View>
        )
    }
};

export default Battery;