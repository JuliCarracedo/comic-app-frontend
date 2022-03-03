import React from "react";

const BigCategorySelector = (props) => {
    const {categories, setCategory} = props
    const handleCategory = (e, cat) => {
        e.preventDefault()
        setCategory(cat)
    }
    return (
        <ul className="big-categories">
            {categories.map(cat => <li key={cat}
            onClick={e=>handleCategory(e,cat)}>
                <h3>{cat}</h3>
            </li>)}
        </ul>
    )

}

export default BigCategorySelector