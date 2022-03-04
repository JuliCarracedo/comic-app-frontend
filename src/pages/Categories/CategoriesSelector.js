import React from "react";
import '../../styles/selector.css'
const CategoriesSelector = (props) => {
    const {categories, setCategory} = props
    const handleCategory = (e, cat) => {
        e.preventDefault()
        setCategory(cat)
    }
    return (
        <ul className="categories">
            {categories.map(cat => (<li key={cat}
            onClick={e=>handleCategory(e, cat)}>
                <h3>{cat}</h3>
            </li>))}
        </ul>
    )

}

export default CategoriesSelector