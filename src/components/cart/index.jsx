import { useStateValue } from "../../context/Context"
import { getCartTotal } from "../../reducer/Reducer"
import { AnimatePresence, motion } from 'framer-motion'
import './cart.css'

const CartDrinks = ({ open }) => {

    const [{ cart }, dispatch] = useStateValue();

    const removeDrink = (id) => {
        dispatch({
            type: "REMOVE_TO_CART",
            id: id
        })
    }


    return (
        <AnimatePresence>
            {open === true &&
                <motion.div
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="cart__container"
                >
                    <h3 className="title">Your Cart</h3>
                    {cart?.length === 0
                        ?
                        <p>You don't have nothing</p>
                        :
                        <>
                            {
                                cart.map((i) => (
                                    <div className="cart" key={i.id}>
                                        <img src={i.image} alt="" />
                                        <div>
                                            <h4>{i.name}</h4>
                                            <p>Price: $/.{i.price}</p>*
                                            <button onClick={() => removeDrink(i.id)}>Remove <i className="far fa-trash-alt"></i></button>
                                        </div>

                                    </div>
                                ))
                            }
                            <p className="total__price">Total Price $/.{getCartTotal(cart)}</p>
                        </>
                    }
                </motion.div>
            }

        </AnimatePresence>
    )
}
export default CartDrinks