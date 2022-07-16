import logo from "../assets/logo.svg.png";
const Header = ({ showBasket, setShowBasket, counter, setCounter }) => {
  //   const displyBasket = () => {
  //     console.log("clicked");
  //     }
  return (
    <div className="header ">
      <div className="container">
        <img src={logo} alt="" />
        <div className="counter">
          <span>{counter}</span>

          <i
            className="fa-solid fa-basket-shopping basket-icon"
            onClick={() => {
              setShowBasket(true);
              // displyBasket();
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
