import React,{Component} from 'react'
import {View ,StyleSheet, StatusBar , ScrollView} from 'react-native'
import Statusbar from './components/StatusBar'
import Battery from './components/Battery'
import Modes from './components/Modes'
import Locker from './components/Locker'
import SetupButton from './components/SetupProfiles'

const styles = StyleSheet.create({

    viewStyle: {

        flex: 1,
        margin: 0,
        backgroundColor: '#cce0ff'
        
    } 

});

class App extends Component {
    render () {
        
        return (
            <View style={styles.viewStyle}>
                    <StatusBar hidden= {true}/>
                    <Statusbar stato='1' />
                    <Battery carica='59%'/>
                    <Modes/>
                    <SetupButton />
                    <Locker/>
            </View>
        );
    }
}

export default App;
