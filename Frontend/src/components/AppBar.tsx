import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="flex justify-between items-center p-5">
            <div className="text-zinc-950 text-3xl font-semibold">
                <a href="/">
                Learning hub
                </a></div>
            <SearchBar />
            <div className="flex justify-between items-center">
                <div className="p-3 text-zinc-950 text-xl">
                    <a href="/About">About</a>
                </div>
                <a href="/Login">
                    <div className="p-3 text-zinc-950 text-xl">
                        Logout
                    </div>
                </a>
            </div>
    </div>
}