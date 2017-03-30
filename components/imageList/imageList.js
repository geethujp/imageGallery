/**
 * image List Component
 * List all the images s
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
                { 'name': 'Image1', 'image': 'http://i.imgur.com/xIzskJl.jpg' },
                { 'name': 'Image2', 'image': 'http://i.imgur.com/xIzskJl.jpg' },
                { 'name': 'Image3', 'image': 'http://i.imgur.com/xIzskJl.jpg' },
                { 'name': 'Image4', 'image': 'http://i.imgur.com/xIzskJl.jpg' },
                { 'name': 'Image5', 'image': 'http://i.imgur.com/xIzskJl.jpg' },
                { 'name': 'Image6', 'image': 'http://i.imgur.com/xIzskJl.jpg' },
                { 'name': 'Image7', 'image': 'http://i.imgur.com/xIzskJl.jpg' },
                { 'name': 'Image8', 'image': 'http://i.imgur.com/xIzskJl.jpg' },
            ]),
        }
    }

    renderCategory(category) {
        return (
          <Image source = {{uri: category.image}} style = {styles.image}>
            <Text style = {styles.headline}>{category.name}</Text>
          </Image>
        );
    }
    render() {
        const Device = require('react-native-device-detection'),
              deviceWidth= Dimensions.get('window').width,
              deviceHeight= Dimensions.get('window').height;
        if (Device.pixelDensity < 2 && (Device.adjustedWidth >= 1000 || Device.adjustedHeight >= 1000)) {
            Device.isTablet = true;
            Device.isPhone = false;
        } else if (Device.pixelDensity === 2 && (Device.adjustedWidth >= 1920 || Device.adjustedHeight >= 1920)) {
            Device.isTablet = true;
            Device.isPhone = false;
        }
         else if (Device.pixelDensity === 1 && (Device.adjustedWidth == 600 || Device.adjustedHeight == 960)) {
            Device.isTablet = true;
            Device.isPhone = false;
        } else {
            Device.isTablet = false;
            Device.isPhone = true;
        }

        if (Device.isTablet) {
            Object.assign(styles, {
                image: {
                    width: deviceWidth / 5 - 10,
                    height: deviceWidth/ 5 - 10,
                }
            });
        }
        if (Device.isPhone) {
            Object.assign(styles, {
                image: {
                    width: deviceWidth / 3 - 10,
                    height: deviceWidth / 3 - 10,
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
