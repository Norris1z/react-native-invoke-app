import { NativeModules } from 'react-native'

const { ReactNativeInvokeApp } = NativeModules

export const isAppInHeadlessMode = () => ReactNativeInvokeApp.isAppInHeadlessMode()
export const wakeMeUp = payload => {
    if (isAppInHeadlessMode()) {
        return ReactNativeInvokeApp.invokeApp({
            data:  typeof data !== 'object' ? {} : payload
        })
    }

    console.warn('Tried to wake up the app which is already instantiated')
}
