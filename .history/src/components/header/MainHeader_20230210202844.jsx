import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";

const MainHeader = () => { 
    return (
        <header className="container flex bg-slate-400 mx-auto">
            <button className="md:hidden">
                <MenuIcon />
            </button>
        <img 
        src={LogoSneakes} 
        alt="Logo sneakers" 
        className="mr-auto md:mr-0"
         />
        <nav className="hidden md:mr-auto md:block">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <div className="flex gap-4">
            <button>
                <CartIcon />
            </button>
            <img src={AvatarImage} alt="" className="w-10" />
        </div>
    </header>
    );
};
export default MainHeader;