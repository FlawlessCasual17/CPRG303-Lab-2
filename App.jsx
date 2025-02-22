import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

export default function App() {
    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ToDoList />
            <ToDoForm />
        </SafeAreaView>
    )
}
