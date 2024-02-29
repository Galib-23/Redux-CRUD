import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { updateBook } from "./BooksSlice";

const EditBook = () => {
  const location = useLocation();
  const book = location.state.book;

  const id = book.id;

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({id, title, author}));
    navigate('/show-books')
  }
  
  return (
    <div>
      <h2 className="mt-20 mb-20 text-3xl font-bold text-amber-600 text-center">Edit Book</h2>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col w-1/3 gap-6">
          <input type="text" placeholder="Enter Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="input input-bordered w-full" />
          <input type="text" placeholder="Enter Author Name" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required className="input input-bordered w-full" />
          <button className="btn btn-primary">Update Book</button>
        </form>
      </div>
    </div>
  )
}

export default EditBook
