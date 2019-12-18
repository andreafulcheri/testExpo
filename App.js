import React,{Component} from 'react'
import {View ,StyleSheet, StatusBar} from 'react-native'
import Statusbar from './components/StatusBar'
import Battery from './components/Battery'
import Modes from './components/Modes'
import Locker from './components/Locker'

const styles = StyleSheet.create({

    viewStyle: {

        flex: 1

    }

});

class App extends Component {
    render () {
        
        return (
            <View style={styles.viewStyle} >
                <StatusBar hidden= {true}/>
                <Statusbar stato='1' />
                <Battery carica='81%'/>
                <Modes/>
                <Locker/>
            </View>
        );
    }
};

export default App;
