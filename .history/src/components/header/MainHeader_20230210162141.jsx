import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
const MainHeader = () => { 
    return (
        <header>
            <button></button>
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