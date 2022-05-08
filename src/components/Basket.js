const Basket = ({ basket, setBasket }) => {
  const decrimentQuantity = (index) => {
    const newBasket = [...basket];

    newBasket[index].quantity > 0 && newBasket[index].quantity--;
    setBasket(newBasket);
  };

  const incrimentQuantity = (index) => {
    const newBasket = [...basket];

    newBasket[index].quantity++;
    setBasket(newBasket);
  };

  const totalHandler = () => {
    let some = 0;
    basket.forEach((item) => {
      some = some + item.quantity * item.price;
    });
    // let somme = basket.reduce((accumulateur, valeurCourante) => {
    //     accumulateur + valeurCourante.quantity
    // }, valeurInitiale)

    return some;
  };

  return (
    <div className="basket">
      <button>Valider mon panier</button>

      <div className="basket-detail ">
        {basket.map((bask, index) => {
          return (
            bask.quantity > 0 && (
              <div key={bask.id}>
                <div>
                  <i
                    className="fa-solid fa-circle-minus"
                    onClick={() => {
                      decrimentQuantity(index);
                    }}
                  ></i>
                  <span>{bask.quantity}</span>
                  <i
                    className="fa-solid fa-circle-plus"
                    onClick={() => {
                      incrimentQuantity(index);
                    }}
                  ></i>
                  <span> {bask.title}</span>
                </div>
                <div>
                  <span>{bask.price * bask.quantity}</span>
                </div>
              </div>
            )
          );
        })}
      </div>
      <div className="basket-info sub-total">
        <span>Sub Total</span>
        <span>{totalHandler().toFixed(2)}</span>
      </div>
      <div className="basket-info sub-total">
        <span>Frais de livraison</span>
        <span>{0}</span>
      </div>

      <div className="basket-info total">
        <span>Total</span>
        <span>{totalHandler().toFixed(2) + 0}</span>
      </div>
    </div>
  );
};

export default Basket;
