type KeyValuePair = {
    [key: string]: any
}

declare module "react-native-invoke-app" {
    export function isAppInHeadlessMode(): boolean
    export function wakeMeUp(data?: KeyValuePair): void
}
