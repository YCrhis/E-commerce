import './header.css'
const Header = ({ cart, open, setOpen, setSearch }) => {

    const handleChange = () => {
        setOpen(!open)
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="header">
            <div className="header__container">
                <h1>MiApp</h1>
                <div className="header__search">
                    <div className="search">
                        <input type="text" onChange={handleInputChange} />
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <div className="header__options">
                    <ul>
                        <button onClick={() => handleChange()}>
                            <li className="header__cart">
                                <i className="fas fa-cart-plus"></i>
                                <p><span>{cart?.length}</span></p>
                            </li>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header