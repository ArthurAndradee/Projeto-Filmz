import { Header } from "../components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Search } from "../pages/Search";
import { Movie } from "../pages/Movie";
import { Wishlist } from "../pages/Wishlist";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<Search />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
        </BrowserRouter>
    )
}