const MainHeader = () => { 
    return (
        <header>
        <img src={LogoSneakes} alt="" />
        <nav>
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <div>
            <button>cart</button>
            <img src={AvatarImage} alt="" />
        </div>
    </header>
    );
};
export default MainHeader;