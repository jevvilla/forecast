# Challenge

This app contains a forecast app that gives the user the chance to search a city and check its weather, also its location in a google map.

## Developer notes:

The following packages / technologies were used to build the app:

- react-navigation
- react-native-vector-icons
- @react-native-community/async-storage
- "react-native-maps"
- TypeScript

## Before we start

Please make sure you have `node`, `npm`, `git`, `cocoapods` installed correctly. In case you don't have any of those installed and setup, please go to [nodejs.org](https://nodejs.org/en/) to download and install the **Recommended For Most Users** version, or go [here](https://git-scm.com/downloads) to download `git`. `cocoapods` can be set up following this [link](https://facebook.github.io/react-native/docs/integration-with-existing-apps).

## Setup

### React Native

Please refer the [React Native docs Getting Started guide](https://facebook.github.io/react-native/docs/getting-started) over the **React Native CLI Quickstart** tab. There, you can see all the detailed setup process for `Android` and `iOS` platforms.

### This Project

Once the above parts are setup, you can go ahead and clone the repo using the following command in your terminal:

```
git clone https://github.com/jevvilla/forecast.git
```

#### NOTE: please make sure you are in the correct branch, `master` in this case.

Then go to the project root (project folder), and run the following commands to get the app running:

- `npm install` - Install project dependencies. (yarn can be used also).
- NOTE: don't forget install the Pod, from the root path run `cd ios && pod install`.
- `npx react-native run-ios` - Run the app locally. By default this will run an iPhone X simulator.
- `npx react-native run-android` - install to the single Android device connected (if more than one are connected, you must specify the device with `—deviceId` which can be gotten from `adb devices`).

Once `npx react-native run-ios` or `npx react-native run-android` finish up, you should be able to see app running.
