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
    Dimensions

} from 'react-native';
import styles from './style';
export default class imageList extends Component {
  onPress = () => {
    const { navigator } = this.props;
    navigator.push({
      id: 'Info'
    });
  }
  constructor(){
    super();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {'name':'Image1', 'image':'http://i.imgur.com/xIzskJl.jpg'},
        {'name':'Image2', 'image':'http://i.imgur.com/xIzskJl.jpg'},
        {'name':'Image3', 'image':'http://i.imgur.com/xIzskJl.jpg'},
        {'name':'Image4', 'image':'http://i.imgur.com/xIzskJl.jpg'},
        {'name':'Image5', 'image':'http://i.imgur.com/xIzskJl.jpg'},
        {'name':'Image6', 'image':'http://i.imgur.com/xIzskJl.jpg'},
        {'name':'Image7', 'image':'http://i.imgur.com/xIzskJl.jpg'},
        {'name':'Image8', 'image':'http://i.imgur.com/xIzskJl.jpg'},
      ]),
    }
  }

  renderCategory(category) {
    return (
        <Image source={{uri: category.image}} style={styles.image}>
            <Text style={styles.headline}>{category.name}</Text>
        </Image>
      );
    }
  render() {
    const Device = require('react-native-device-detection');

    if(Device.isTablet) {
      Object.assign(styles, {
        image: {
          height: 110,
          width: Dimensions.get('window').width / 5 ,
        },
      });
    }

    if(Device.isPhone) {
      Object.assign(styles, {
        image: {
          height: 110,
          width: Dimensions.get('window').width / 3 ,
        },
      });
    }

    return (
      <View>
      <Button title="Back" color="#5c6bc0" onPress={this.onPress}/>
      <ListView dataSource={this.state.dataSource} renderRow={this.renderCategory} contentContainerStyle={styles.list_view}/>
      </View>
    );
  }
}