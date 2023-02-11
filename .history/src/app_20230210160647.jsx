import LogoSneakes from "@/assets/images/logo.svg"
import AvatarImage from "@/assets/images/image-avatar.png"
import MainHeader from "@/components/header/MainHeader";
const App = ()  => {
    return (
    <>
            <MainHeader />
            <main>
                <section>
                    galeria de imagenes
                </section>
                <section>
                    <p>Sneaker Company</p>
                    <h2>Fall Limited Edition Sneakers</h2>
                    <p>Estas zapatillas de deporte de perfil bajo son tu compañero de ropa informal perfecto. Con un
  suela exterior de goma duradera, resistirán todo lo que el clima pueda ofrecer.</p>
                    <p>
                        <span>S/ 125.00</span>
                        <span>50%</span>
                    </p>
                    <p> S/ 250.00</p>
                    <div>
                        <div>
                       <button>-</button>
                       <span>0</span>
                       <button>+</button>
                       </div>
                       <button>Add to cart</button>
                    </div>
                </section>
            </main>
    </>
  );
};

export default App;
