/**
 * image List Component
 * List all the imagess
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ListView,
    Button,
    Dimensions,

} from 'react-native';
import styles from './style';
import Device from '../../lib/device-info';
export default class imageList extends Component {
    onPress = () => {
        const { navigator } = this.props;
        navigator.push({
            id: 'Info'
        });
    }
    constructor() {
        super();
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                { 'id': '1', 'image': require('../../images/pic_01.jpg') },
                { 'id': '2', 'image': require('../../images/pic_02.jpg') },
                { 'id': '3', 'image': require('../../images/pic_03.jpg') },
                { 'id': '4', 'image': require('../../images/pic_04.jpg') },
                { 'id': '5', 'image': require('../../images/pic_05.jpg') },
                { 'id': '6', 'image': require('../../images/pic_06.jpg') },
                { 'id': '7', 'image': require('../../images/pic_07.jpg') },
                { 'id': '8', 'image': require('../../images/pic_08.jpg') },
            ]),
        }
    }

    renderCategory(category) {
        return (
          <Image source = {category.image} style = {styles.image}/>
        );
    }
    render() {
        if (Device.isTablet) {
            Object.assign(styles, {
                image: {
                    width: Device.width / 5 - 10,
                    height: Device.width/ 5 - 10,
                }
            });
        }
        if (Device.isPhone) {
            Object.assign(styles, {
                image: {
                    width: Device.width / 3 - 10,
                    height: Device.width / 3 - 10,
                }
            });
        }
        return (
            <View>
              <Button title = "Back" color = "#5c6bc0" onPress = { this.onPress }/>
              <ListView dataSource = {this.state.dataSource} renderRow = {this.renderCategory} contentContainerStyle = {styles.list_view}/>
            </View>
        );
    }
}
