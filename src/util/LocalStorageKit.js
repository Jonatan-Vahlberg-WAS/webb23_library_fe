

class LocalStorageKit {

    STORAGE_TOKEN_KEY = "STORAGE_TOKEN_KEY"

    setTokenInStorage(token) {
        localStorage.setItem(this.STORAGE_TOKEN_KEY, JSON.stringify(token))
    }

    getTokenFromStorage() {
        const token = localStorage.getItem(this.STORAGE_TOKEN_KEY)
        if(token) {
            return JSON.parse(token)
        }
    }

    deleteTokenFormStorage() {
        localStorage.removeItem(this.STORAGE_TOKEN_KEY)
    }
}

const localStorageKit = new LocalStorageKit();

export default localStorageKit