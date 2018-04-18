import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Button, Input } from 'react-native-elements';

const CATEGORIES = {
    'theatre': '4bf58dd8d48988d17f941735',
    'food': '4d4b7105d754a06374d81259',
    'beach': '4bf58dd8d48988d1e2941735',
    'museum': '4bf58dd8d48988d181941735'
}

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            screen: 'null',
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    How would you to like to start your day?
                </Text>

                <Text style={styles.placeText}>
                    Welcome to San Francisco
                </Text>
                <Text style={styles.greetingText}>
                    Lets start planning your weekend!
                </Text>

                <View style={styles.planningButton}>
                    <Button
                        onPress={() => this.props.navigation.navigate('OptionDetail')}
                        title="Start Planning"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            width: 320,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                    />
                </View>

                {/* Specific Plans */}

                <Text style={styles.greetingText}>
                    Have something specific in mind?
                </Text>

                {/* <View style={styles.planningButton}>
                    <Button
                        onPress={() => this.props.navigation.navigate('OptionDetail')}
                        title="Start Planning"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            width: 320,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                    />
                </View> */}

                <View style={styles.smallRow}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Card', {category_id: CATEGORIES["theatre"] })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/theatre.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Card', { category_id: CATEGORIES["food"] })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/food.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.smallRow2}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Card', { category_id: CATEGORIES["beach"] })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/beach.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Card', { category_id: CATEGORIES["museum"] })}>
                        <Image
                            style={styles.thumbnailImage}
                            source={require('../../images/museum.png')}
                        />
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.buttonContainer}>
                    <Button
                        title="Movies"
                        titleStyle={{ fontWeight: "700" }}
                        color="blue"
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 0)",
                            width: 100,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                        containerStyle={{ marginTop: 20 }}
                    />
                    <Button
                        title="Beach"
                        titleStyle={{ fontWeight: "700" }}
                        color="blue"
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 0)",
                            width: 100,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                        containerStyle={{ marginTop: 20 }}
                    />
                    <Button
                        title="Food"
                        titleStyle={{ fontWeight: "700" }}
                        color="blue"
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 0)",
                            width: 100,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                        containerStyle={{ marginTop: 20 }}
                    />
                    <Button
                        title="Pizza"
                        titleStyle={{ fontWeight: "700" }}
                        color="blue"
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 0)",
                            width: 100,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                        containerStyle={{ marginTop: 20 }}
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('OptionDetail')}
                        title="Go"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            width: 100,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                        containerStyle={{ marginTop: 20 }}
                    />
                </View> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 30,
        textAlignVertical: "center",
        textAlign: "center",
    }
})