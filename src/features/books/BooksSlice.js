import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        {id: 1, title: "Harry Potter", author: "JK Rowling"},
        {id: 2, title: "Amar Meyebela", author: "Taslima Nasrin"},
    ]
};

export const booksSlice = createSlice(
    {
        name: "books",
        initialState: initialBooks,
        reducers: {
            showBooks: (state) => state,
            addBook: (state, action) => {
                state.books.push(action.payload);
            },
            deleteBook: (state, action) => {
                const id = action.payload;
                state.books = state.books.filter(book => book.id != id);
            },
            updateBook: (state, action) => {
                const {id, title, author} = action.payload;
                const isBookExist = state.books.filter((book) => book.id === id);
                if(isBookExist){
                    // filter returns an array.
                    //in this case the id is unique so the first index is the desired book
                    isBookExist[0].title = title;
                    isBookExist[0].author = author;
                }
            }
        }
    } 
)

export const {showBooks, addBook, deleteBook, updateBook} = booksSlice.actions;
export default booksSlice.reducer;