import React, {useEffect} from 'react';
import LoginPage from './src/screen/Auth/Login';
import {DevSettings, NativeModules, SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Debugging With debugger', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(true);
      });
      DevSettings.addMenuItem('Stop Debugging With debugger', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(false);
      });
    }
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginPage />
    </SafeAreaView>
  );
}
console.log('Debugging працює!');
export default App;
