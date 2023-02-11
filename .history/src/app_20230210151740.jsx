import LogoSneakes from './assets/images/logo.svg'
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
            </header>
    </>
  );
};

export default App;
