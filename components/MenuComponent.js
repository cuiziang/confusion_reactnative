import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {DISHES} from "../shared/dishes";
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {Tile} from "react-native-elements"
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };

    render() {
        const renderMenuItem = ({item, index}) => {

            return (
                <Animatable.View animation="fadeInRightBig" duration={2000}>
                    <Tile
                        key={index}
                        title={item.name}
                        caption={item.description}
                        featured
                        onPress={() => navigate('DishDetail', {dishId: item.id})}
                        imageSrc={{ uri: baseUrl + item.image}}
                    />
                </Animatable.View>
            );
        };

        const {navigate} = this.props.navigation;

        return (
            <FlatList
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}


export default connect(mapStateToProps)(Menu);