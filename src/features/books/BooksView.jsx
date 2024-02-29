import { useDispatch, useSelector } from "react-redux"
import { deleteBook } from "./BooksSlice";
import { Link } from "react-router-dom";

const BooksView = () => {

    const books = useSelector((state) => state.booksReducer.books);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteBook(id));
    }

    return (
        <div className="mt-10">
            <h2 className="mt-2 font-bold text-3xl text-amber-800 text-center">All Books</h2>
            <div className="flex justify-center mt-8">
                <div className="overflow-x-auto w-1/2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books && books.map((book) => <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td className="flex">
                                    <Link to='/edit-book' state={{book}}>
                                        <button className="btn btn-accent">Edit</button>
                                    </Link>
                                    <button onClick={() => handleDelete(book.id)} className="btn bg-red-500 ml-3">Delete</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BooksView
