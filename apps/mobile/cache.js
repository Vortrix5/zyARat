import * as SecureStore from 'expo-secure-store'
import { Platform } from 'react-native'

const createTokenCache = () => {
  return {
    getToken: async (key) => {
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log(`${key} was used 🔐 \n`)
        } else {
          console.log('No values stored under key: ' + key)
        }
        return item
      } catch (error) {
        console.error('secure store get item error: ', error)
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    saveToken: (key, token) => {
      return SecureStore.setItemAsync(key, token)
    },
  }
}

export const tokenCache = Platform.OS !== 'web' ? createTokenCache() : undefined