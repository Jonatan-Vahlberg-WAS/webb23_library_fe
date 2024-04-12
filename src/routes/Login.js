import { useState } from "react";
import apiKit from "../util/ApiKit";
import localStorageKit from "../util/LocalStorageKit";


function Login() {
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData)
        console.log(data)

        apiKit.post("/api/v1/auth/login", data)
            .then(response => {
                const token = response.data
                localStorageKit.setTokenInStorage(token)
            })
            .catch(error => {
                const message = error.response.data.message
                console.warn("Error logging in", message)
                setError(message)
            })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input name="email" id="email" type="email" placeholder="Email" value="email.test6@mail.com"/>
            </div>
            <div>
                <input name="password" id="password" type="password" placeholder="Password" value="password123"/>
            </div>
            {error && (
                <p>
                    {error}
                </p>
            )}
            <button type="submit">
                Login
            </button>
        </form>
    )
}

export default Login