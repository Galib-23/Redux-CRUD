import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-center bg-slate-400 py-6">
            <div className="flex gap-8">
                <Link className="hover:underline font-semibold" to='/'>Home</Link>
                <Link className="hover:underline font-semibold" to='/show-books'>Show Books</Link>
                <Link className="hover:underline font-semibold" to='/add-book'>Add Book</Link>
            </div>
        </nav>
    )
}

export default Navbar
