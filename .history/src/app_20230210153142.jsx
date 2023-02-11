import LogoSneakes from "@/assets/images/logo.svg"
import AvatarImage from "@/assets/images/image-avatar.png"

const App = ()  => {
return (
    <>
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
            <main>
                <section>
                    galeria de imagenes
                </section>
                <section>
                    <p>Sneaker Company</p>
                    <h2>Fall Limited Edition Sneakers</h2>
                    <p>Estas zapatillas de deporte de perfil bajo son tu compañero de ropa informal perfecto. Con un
  suela exterior de goma duradera, resistirán todo lo que el clima pueda ofrecer.</p>
                </section>
            </main>
    </>
  );
};

export default App;
