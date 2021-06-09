import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, TextInput, Button } from 'react-native'
import { fetchastroid } from '../../redux/action/actions'
import { connect } from 'react-redux';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';

const Search = props => {
    const [id, setid] = useState(null)
    const nav = useNavigation()
    let url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=5nY54qVqglHJnJg8URYrdX31qe0dCG0GczbTlwMK`

    useEffect(() => {
        props.fetchastroid()
    }, [])

    const response = []
    const search = (id) => {
        console.log('works')
        axios.get(url).then((res) => {
            response.push(res.data)
        }).then(() => {
            for (var key in response) {
                nav.navigate('Display', { asroidDetails: response[key] })
            }
        }).catch((error) => { console.log(error.response) })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput value={id} onChangeText={setid} style={{ borderWidth: 2, margin: 5 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                <View style={{ margin: 5 }}>
                    <Button title={'Submit'} onPress={search} />
                </View>
                <View style={{ margin: 5 }}>
                    <Button title={'Random'} />
                </View>
            </View>

        </View>

    )
}
const mapStateToProps = (state) => {
    return {
        astroid: state.astroid
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchastroid: () => dispatch(fetchastroid())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
