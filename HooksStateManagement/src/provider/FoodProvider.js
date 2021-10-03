import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FoodProvider extends Component {
    state = {
        name: 'tacos',
        calories: '90'
    }

    setName = (name) => {
        this.setState({name})
    }

    setCalories = (name) => {
        this.setState({name})
    }

}
