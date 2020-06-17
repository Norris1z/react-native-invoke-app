import { NativeModules } from 'react-native'

const { ReactNativeInvokeApp } = NativeModules

export const wakeMeUp = payload => {
    return ReactNativeInvokeApp.invokeApp({
        data:  typeof data !== 'object' ? {} : payload
    })
}
