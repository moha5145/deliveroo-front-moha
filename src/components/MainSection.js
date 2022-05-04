import { useState } from "react"
import Basket from "./Basket"

const MainSection = ({ data }) => {
    const [basket, setBasket] = useState([])

    const addToBasket = (meal) => {
        const newBasket = [...basket]
        if (newBasket.length === 0) {
            newBasket.push({ id: meal.id, title: meal.title, price: meal.price, quantity: 1 })
        } else {
            let isExist = false
            for (let i = 0; i < newBasket.length; i++) {
                if (newBasket[i].id === meal.id) {
                    isExist = true
                    newBasket[i].quantity++
                }
            }
            isExist === false && newBasket.push({ id: meal.id, title: meal.title, price: meal.price, quantity: 1 })
        }
        setBasket(newBasket)
    }
    return <section className='main-section'>
        <div className='container'>
            <div className='category'>
                {data.categories.map((category, index) => {

                    return category.meals.length > 0 && <div className='cards-container' key={index}>
                        <h3 >{category.name}</h3>
                        <div className='cards'>

                            {category.meals.map((meal, index) => {

                                return <div className='card' key={index} onClick={() => {
                                    addToBasket(meal)
                                }}>
                                    <div className="description">
                                        <h4>{meal.title}</h4>
                                        <p>{meal.description}</p>
                                        <span>{meal.price}</span>
                                        <span>{meal.popular}</span>

                                    </div>
                                    {
                                        meal.picture && <div className="image-container">
                                            <img src={meal.picture} alt="" />
                                        </div>
                                    }


                                </div>
                            })
                            }

                        </div>
                    </div>
                })}

            </div>


            <Basket basket={basket} setBasket={setBasket} />
        </div>
    </section>
}

export default MainSection