# imageGallery
imageGallery is an application built over React-Native. 
 * Mobile View shows potrait view with 2 images per row.
 * Tablet View shows landscape view with 4 images per row.
 
 Device detection is done using  [react-native-device-detection](https://www.npmjs.com/package/react-native-device-detection)
 Some devices like Nexus 7 fails to fall under the tablet. They show mobile behaviour. Use fallback.
 ```javascript
const windowSize = Dimensions.get('window');

class DetectthisService {
  constructor() {
    this.pixelDensity = PixelRatio.get();
    this.width = windowSize.width;
    this.height = windowSize.height;
    this.adjustedWidth = this.width * this.pixelDensity;
    this.adjustedHeight = this.height * this.pixelDensity;

    this.isPhoneOrTablet();
    this.isIosOrAndroid();
  }

  isPhoneOrTablet() {
    if (this.pixelDensity < 2 && (this.adjustedWidth >= 1000 || this.adjustedHeight >= 1000)) {
      this.isTablet = true;
      this.isPhone = false;
    } else if (this.pixelDensity === 2 && (this.adjustedWidth >= 1920 || this.adjustedHeight >= 1920)) {
      this.isTablet = true;
      this.isPhone = false;
    }
     else if (this.pixelDensity === 1 && (this.adjustedWidth == 600 || this.adjustedHeight == 960)) {
      this.isTablet = true;
      this.isPhone = false;
    } else {
      this.isTablet = false;
      this.isPhone = true;
    }
  }

  isIosOrAndroid() {
    if(Platform.OS === 'ios') {
      this.isIos = true;
      this.isAndroid = false;
    } else {
      this.isIos = false;
      this.isAndroid = true;
    }
  }
}
```
Based on detecting if the device is mobile/ tablet we can limit the number of images per row.
 ```javascript
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
```
