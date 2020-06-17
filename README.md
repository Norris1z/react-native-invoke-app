
# React Native Invoke App

Original repo [Github](https://github.com/vicke4/react-native-invoke-app) - but not maintained

My improvements:
- supports Typescript typings
- supports FLAG_ACTIVITY_SINGLE_TOP
- updated dependencies

## Installation

```
# Temporarly not published to NPM
# edit your package.json

"dependencies": {
    "react-native-invoke-app": "git+https://github.com/codegateinc/react-native-invoke-app.git"
}

# for React Native <0.60
$ react-native link react-native-invoke-app

# for React Native 0.60+
# Supports autolinking
```

## Extra step needed when app is not running

Event listener will work fine when your app is in background or foreground. If it is not running, to capture the first event we need to do some extra work. Make the following changes in your `MainActivity.java` file of React Native app,

```diff
package com.yourpackage;

+import android.os.Bundle;
import com.facebook.react.ReactActivity;
+import com.codegulp.invokeapp.RNInvokeApp;

public class MainActivity extends ReactActivity {
    /**
    * Returns the name of the main component registered from JavaScript.
    * This is used to schedule rendering of the component.
    */
    @Override
    protected String getMainComponentName() {
    	return "testProject";
    }
    
+   @Override
+   protected void onCreate(Bundle savedInstanceState) {
+       super.onCreate(savedInstanceState);
+	RNInvokeApp.sendEvent();
+   }
}
```

## Usage

```
import { wakeMeUp } from 'react-native-invoke-app'

wakeMeUp(payload) // pass anything to get it inside appInvoked listener

```

### License

MIT
