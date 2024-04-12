import axios from "axios"
import { useEffect, useState } from "react"
import apiKit from "../util/ApiKit"


function Home() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        apiKit.get("/api/v1/books")
            .then(response => {
                setBooks(response.data)
            })
            .catch((error) => {
                console.warn("Error fetching books: ",  error)
            })
    }, [])

    return (
        <div>
            {books.map(book => (
                <div key={book._id}>
                    <p>{book.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Home