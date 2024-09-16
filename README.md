# Installion Guide (Mac OS)

- Install Node & Watchman by running following command-
  ```
    brew install node
    brew install watchman
  ```
- `git clone` the repository
- Run command `yarn install` to install the packages

## For iOS

1. Download the latest version of Xcode along with the iOS Simulator and all the necessary tools to build your iOS app.
2. Install the Xcode Command Line Tools.
3. Install [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)
4. Run command `cd ios && pod install && cd ..` to install the pods
5. And finally `yarn ios` to run in iOS simulator

## For Android

1. Install Java Development Kit by running the following commands in terminal:

   ```
     brew tap homebrew/cask-versions
     brew install --cask zulu17

     # Get path to where cask was installed to double-click installer
     brew info --cask zulu17
   ```

2. Download and install the Android Studio
3. Install Android 14 (UpsideDownCake) SDK in particular and make sure Android SDK Platform 34 and Google APIs Intel x86 Atom System Image are checked
4. Make sure Android SDK Build-Tools 34.0.0 is selected.
5. Add the following lines to your ~/.zprofile or ~/.zshrc (if you are using bash, then ~/.bash_profile or ~/.bashrc) config file:
   ```
     export ANDROID_HOME=$HOME/Library/Android/sdk
     export PATH=$PATH:$ANDROID_HOME/emulator
     export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```
   And run source ~/.zprofile (or source ~/.bash_profile for bash) to load the config into your current shell.
6. And finally `yarn android` to run in android emulator

To Learn more about installion please follow the official React Native installion guide link below:
https://reactnative.dev/docs/environment-setup?platform=android

# Features

- [redux-persist](https://github.com/rt2zz/redux-persist) has been used to store images list data
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) has been used to store images for offline access
- Albums are created depending on the album ids
- All images album contains all the images in the app
- Long press on a album to delete the album (except All images album)
- Long press on a image on image-list screen to delete an image
- Alternatively you can delete an image from the image details screen by pressing on the three dots on the app bar.

# Screenshots
![Simulator Screen Shot - iPhone 14 Pro Max - 2024-09-16 at 12 42 45](https://github.com/user-attachments/assets/9662a77a-89af-46ad-844c-c55fbae5656a)

![Simulator Screen Shot - iPhone 14 Pro Max - 2024-09-16 at 12 42 56](https://github.com/user-attachments/assets/e34d5333-f3e1-471a-a8d8-f9fb3da684f6)

![Simulator Screen Shot - iPhone 14 Pro Max - 2024-09-16 at 12 43 48](https://github.com/user-attachments/assets/18dc1980-2101-47be-b645-adf275e74bc9)

![Simulator Screen Shot - iPhone 14 Pro Max - 2024-09-16 at 12 43 44](https://github.com/user-attachments/assets/17c6c8b2-94e7-4016-93a2-18034555eece)

![Simulator Screen Shot - iPhone 14 Pro Max - 2024-09-16 at 12 44 42](https://github.com/user-attachments/assets/a9fbed92-3e76-4dcd-8992-f799eac50d1f)

![Simulator Screen Shot - iPhone 14 Pro Max - 2024-09-16 at 12 44 46](https://github.com/user-attachments/assets/d1b50529-6e09-46eb-b1ad-aebbc191911c)










