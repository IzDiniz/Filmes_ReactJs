import NavBar from "../navBar";

function Header() {
    return (
        <header className="flex justify-around bg-pink-300 text-white p-5 mb-4 font-medium">
            <span>Olá Visitante</span>
            <h1>Bem-vindo ao MovieApp</h1>
            <NavBar />
        </header>
     );
}

export default Header;