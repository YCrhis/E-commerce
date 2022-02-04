import { motion } from 'framer-motion';
import { useStateValue } from '../../context/Context';
import './card.css'

const Card = ({ id, name, image, price }) => {

    const [{ }, dispatch] = useStateValue();

    const addToCard = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                name: name,
                image: image,
                price: price,
            }
        })
    }

    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, y: 70 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <img src={image} alt={image} />
            <div className="card__body">
                <h3>{name}</h3>
                <p>Price: $/.{price}</p>
                <button onClick={addToCard} className="card__button">Add to Cart <i className="fas fa-cart-plus"></i></button>
            </div>
        </motion.div>
    )
}
export default Card