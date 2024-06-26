import apiKit from "./ApiKit"


class LocalStorageKit {

    STORAGE_TOKEN_KEY = "STORAGE_TOKEN_KEY"

    setTokenInStorage(token) {
        localStorage.setItem(this.STORAGE_TOKEN_KEY, JSON.stringify(token))
        apiKit.defaults.headers.common['Authorization'] = `Bearer ${token.access}`
    }

    getTokenFromStorage() {
        const token = localStorage.getItem(this.STORAGE_TOKEN_KEY)
        if(token) {
            const parsedToken = JSON.parse(token)
            apiKit.defaults.headers.common['Authorization'] = `Bearer ${parsedToken?.access}`
            return parsedToken
        }
        return null
    }

    deleteTokenFormStorage() {
        localStorage.removeItem(this.STORAGE_TOKEN_KEY)
    }
}

const localStorageKit = new LocalStorageKit();

export default localStorageKit