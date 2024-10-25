import React from 'react'
import {
    Button,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400'
    },
    highlight: {
        fontWeight: '700'
    }
})

export default function ToDoList() {
    return (
        <div>
            <ScrollView>
                <Pressable>
                    <View style={[styles.task, styles.completed]}>
                        <Text style={styles.taskText}>Do laundry</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={[styles.task]}>
                        <Text style={styles.taskText}>Go to gym</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={[styles.task, styles.completed]}>
                        <Text style={styles.taskText}>Walk dog</Text>
                    </View>
                </Pressable>
            </ScrollView>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task..."
                />
                <Button title="Add" />
            </View>
        </div>
    )
}
