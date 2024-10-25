import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import ToDoList from './ToDoList'

// function Section({ children, title }) {
//     const isDarkMode = useColorScheme() === 'dark'
//     return (
//         <View style={styles.sectionContainer}>
//             <Text
//                 style={[
//                     styles.sectionTitle,
//                     {
//                         color: isDarkMode ? Colors.white : Colors.black
//                     }
//                 ]}>
//                 {title}
//             </Text>
//             <Text
//                 style={[
//                     styles.sectionDescription,
//                     {
//                         color: isDarkMode ? Colors.light : Colors.dark
//                     }
//                 ]}>
//                 {children}
//             </Text>
//         </View>
//     )
// }

function App() {
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
        </SafeAreaView>
    )
}

export default App
