import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    
    const numberOfBooks = useSelector((state) => state.booksReducer.books.length);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {id: numberOfBooks + 1, title, author };
        dispatch(addBook(book));
        navigate('/show-books')
    }
    return (
        <div>
            <h2 className="mt-20 mb-20 text-3xl font-bold text-amber-600 text-center">Add Book</h2>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col w-1/3 gap-6">
                    <input type="text" placeholder="Enter Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="input input-bordered w-full" />
                    <input type="text" placeholder="Enter Author Name" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required className="input input-bordered w-full" />
                    <button className="btn btn-primary">Add Book</button>
                </form>
            </div>

        </div>
    )
}

export default AddBook
