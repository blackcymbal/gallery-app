# Installion Guide (Mac OS)
- Install Node & Watchman by running following command-
  ```
    brew install node
    brew install watchman
  ```
- ```git clone``` the repository
- Run command ``` yarn install ``` to install the packages
  
## For iOS
1. Download the latest version of Xcode along with the iOS Simulator and all the necessary tools to build your iOS app.
2. Install the Xcode Command Line Tools.
3. Install [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)
4. Run command ``` cd ios && pod install && cd .. ``` to install the pods
5. And finally ``` yarn ios ``` to run in iOS simulator

## For Android
1. Install Java Development Kit by running the following commands in terminal:
   ```
     brew tap homebrew/cask-versions
     brew install --cask zulu17
    
     # Get path to where cask was installed to double-click installer
     brew info --cask zulu17
   ```
3. Download and install the Android Studio
4. Install Android 14 (UpsideDownCake) SDK in particular and make sure Android SDK Platform 34 and Google APIs Intel x86 Atom System Image are checked
5. Make sure Android SDK Build-Tools 34.0.0 is selected.
6. Add the following lines to your ~/.zprofile or ~/.zshrc (if you are using bash, then ~/.bash_profile or ~/.bashrc) config file:
   ```
     export ANDROID_HOME=$HOME/Library/Android/sdk
     export PATH=$PATH:$ANDROID_HOME/emulator
     export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```
   And run source ~/.zprofile (or source ~/.bash_profile for bash) to load the config into your current shell.
   
8. And finally ``` yarn android ``` to run in android emulator


To Learn more about installion please follow the official React Native installion guide link below: 
https://reactnative.dev/docs/environment-setup?platform=android
