# imageGallery
imageGallery is an application built over React-Native. 
 * Mobile View shows potrait view with 2 images per row.
 * Tablet View shows landscape view with 4 images per row.
 
 Device detection is done using  [react-native-device-detection](https://www.npmjs.com/package/react-native-device-detection)
 
 ```javascript
  const Device = require('react-native-device-detection');
  if(Device.isTablet) {
  Object.assign(styles, {
   image: {
     width: Dimensions.get('window').width / 5 - 10 ,
     height: Dimensions.get('window').width / 5 - 10,
   }
  });
}
if(Device.isPhone) {
  Object.assign(styles, {
   image: {
     width: Dimensions.get('window').width / 3 - 10 ,
     height: Dimensions.get('window').width / 3 - 10,
   }
  });
}
```
