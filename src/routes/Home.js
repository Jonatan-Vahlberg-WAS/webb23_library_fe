import axios from "axios";
import { useEffect, useState } from "react";
import apiKit from "../util/ApiKit";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    apiKit
      .get("/api/v1/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.warn("Error fetching books: ", error);
      });
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <div className="books">
        {books.map((book) => (
          <div key={book._id} className="book">
            <p>{book.title}</p>
            <p>{book.author.firstName} {book.author.lastName}</p>
            <p>ISBN: {book.ISBN}</p>
            <p>{book.yearOfPublication}</p>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
