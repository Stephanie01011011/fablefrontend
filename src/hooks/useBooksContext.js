import { BooksContext } from "../context/booksContext";
import { useContext } from "react";

export const useBooksContext = () => {
    const context = useContext(BooksContext);

    if(!context){
        throw Error("useBooksContext must be used inside a book context provider.")
    }

    return context
}