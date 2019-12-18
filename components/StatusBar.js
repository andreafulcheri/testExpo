import React,{Component} from 'react'
import {View ,StyleSheet,Text} from 'react-native'

const styles = StyleSheet.create({

    viewStyle: {
        
        height: '7%',
        backgroundColor:'white',
        margin: 10,
        marginTop: 10,
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

    statusViewStyle: {

        flex: 1,
        backgroundColor: '#99ff99',
        borderRadius: 5,
        alignItems: 'center',
        textAlignVertical: 'center'

    },
       
    textStyle: {

        fontSize: 20 ,
        color:'#001a00',
        textAlignVertical: 'center',
        flex : 1

    }

});

class StatusBar extends Component {
    
    color (props) {

        var stato = this.props.stato;
        
        if(stato == '0' ){
            return ('#ff3300')
        }else if(stato == '1' ){
            return ('#00ff00')
        }else if(stato == '2' ){
            return('#ffff00')
        }
    }

    stateText(props) {

        var stato = this.props.stato;
        
        if(stato == '0' ){
            return ('disconnesso')
        }else if(stato == '1' ){
            return ('connesso')
        }else if(stato == '2' ){
            return('in connesione...')
        }
    }

    render () {
        
        return (
            <View style={styles.viewStyle} >
                <View style={[styles.statusViewStyle, {backgroundColor: this.color(this.props)}]}> 
                <Text style={styles.textStyle}>Stato {this.stateText(this.props)}</Text>
                </View>
            </View>
        );
    }
};

export default StatusBar;
