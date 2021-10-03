import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

export default class ThirdComponent extends Component {

    state = {
        name: 'Kabob',
        calories: '110'
    }

    async componentDidMount() {
        console.log("component did mount")
        const result = await fetch('https://openbrewerydb.org/breweries/5494')
        const brewery = await result.json()
        console.log(brewery.name)
    }

    render() {
        return (
            <View >
                <Text>{this.state.name} </Text>
                <Text>{this.state.calories} </Text>
                <TextInput
                style={}
                placeholder='name'
                onChangeText={text => this.setState({ name: text })}
                value={this.state.name}
                />
                <TextInput
                style={}
                placeholder='calories'
                onChangeText={text => this.setState({ calories: text })}
                value={this.state.calories}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
    }
})