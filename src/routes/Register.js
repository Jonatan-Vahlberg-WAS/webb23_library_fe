import apiKit from "../util/ApiKit";
import localStorageKit from "../util/LocalStorageKit";
import { useNavigate } from "react-router-dom";



function Register() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData)

        apiKit.post("/api/v1/auth/register", data)
            .then(response => {
                const token = response.data;
                localStorageKit.setTokenInStorage(token)
                navigate("/")
                
            })
            .catch((error) => {
                const message = error?.response?.data?.message || "Something went wrong";
                console.warn("error in registering user: ", message)
            }) 


    }
    //TODO register user
    //TODO handle response form backend
    return (
        <form id="register-form" onSubmit={handleSubmit}>
            <div>
                <input name="email" id="email" type="email" placeholder="Email" required/>
            </div>
            <div>
                <input name="password" id="password" type="password" placeholder="Password" value="password123" minLength={8} required/>
            </div>
            <div>
                <input name="firstName" id="firstName" type="text" placeholder="First name" required/>
            </div>
            <div>
                <input name="lastName" id="lastName" type="text" placeholder="Last name" required/>
            </div>
            {/* TODO error */}
            <button type="submit">
                Register
            </button>
        </form>
    )
}

export default Register