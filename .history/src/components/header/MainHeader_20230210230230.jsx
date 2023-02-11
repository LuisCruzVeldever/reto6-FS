import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";

const MainHeader = () => { 

     const handleOpenMenu = () => {
        
     }

    return (
        <header className="container mx-auto flex items-center gap-8 bg-gray-200 px-4 py-8">
            <button className="md:hidden" onclick={handleOpenMenu}>
                <MenuIcon />
            </button>
        <img 
        src={LogoSneakes} 
        alt="Logo sneakers" 
        className="mr-auto mb-1 h-5 md:mr-0 "
         />
        <nav className="absolute top-0 left-0 flex flex-col bg-gray-400 md:mr-auto md:flex md:flex-row md:gap-4">
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