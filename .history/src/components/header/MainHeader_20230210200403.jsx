import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";

const MainHeader = () => { 
    return (
        <header>
            <button className="md:hidden">
                <MenuIcon />
            </button>
        <img src={LogoSneakes} alt="" />
        <nav className="hidden md:block">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <div>
            <button>
                <CartIcon />
            </button>
            <img src={AvatarImage} alt="" />
        </div>
    </header>
    );
};
export default MainHeader;