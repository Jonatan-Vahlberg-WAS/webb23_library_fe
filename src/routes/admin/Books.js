import { useEffect, useState } from "react"
import apiKit from "../../util/ApiKit"
import localStorageKit from "../../util/LocalStorageKit"



function AdminBooks() {
    const [authors, setAuthors] = useState([])
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
       getAuthors()
       getBooks()
        const token = localStorageKit.getTokenFromStorage()
       if(token?.access) {
        setIsAuthenticated(true)
       }
    }, [])

    const getAuthors = () => {
        apiKit.get("api/v1/authors")
        .then(response => {
            setAuthors(response.data)
        })
        .catch((error) => {
            const message = error?.response?.data?.message || "Something went wrong";
            console.warn("Error getting authors: ", message)
        })
    }

    const getBooks = () => {
        apiKit.get("api/v1/books")
        .then(response => {
            setBooks(response.data)
        })
        .catch((error) => {
            const message = error?.response?.data?.message || "Something went wrong";
            console.warn("Error getting authors: ", message)
        })
    }

    const handleSubmit = (e) => {
       setError(null)
        e.preventDefault()

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData)

        console.log(data)

        apiKit.post("api/v1/books", data)
            .then(response => {
                console.log(response)
                getBooks()
                alert("Book was addded to library")
            })
            .catch((error) => {
                console.log(error.response.data)
                const message = error?.response?.data?.message || "Something went wrong"
                console.warn("Error adding new book", message)
                setError(message)
            })
    }
    if(!isAuthenticated) {
        return (
            <h2 style={{ color: "red"}}>
                User is not "Authenticated"
            </h2>
        )
    }
    return (
        <div>
            <form
            onSubmit={handleSubmit}
            className="new-book-form">
                <h2>Add new Book</h2>
                <div>
                    <input name="title" id="title" placeholder="Book title" required/>
                </div>
                <div>
                    <select name="author" id="author" required>
                        <option disabled value="">
                            Choose Author
                        </option>
                        {authors.map(author => (
                            <option key={author._id} value={author._id}>
                                {author.firstName} {author.lastName}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <input type="number" name="yearOfPublication" id="yearOfPublication" min={1200} max={2023} placeholder="Year of publication" required />
                </div>
                <div>
                    <input name="ISBN" id="ISBN" placeholder="ISBN (optional)"/>
                </div>
                {error && (
                    <p style={{color: "red"}}>
                        {error}
                    </p>
                )}
                <button type="submit">
                    Add new book
                </button>
            </form>
            <div>
                <h2>Books</h2>
                <div>
                    {books.map(book => (
                        <div>
                            <span>
                                {book.title} - {book.author.firstName} {book.author.lastName}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminBooks