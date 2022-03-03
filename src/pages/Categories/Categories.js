import React, { useState } from "react";
import BigCategorySelector from "./BigCategorySelector";
import CategoriesSelector from "./CategoriesSelector";

const Categories = () => {
    const [category,setCategory] = useState(false)
    const categories = ['Action', 'Fantasy', 'Slice of Life', 'Comic Strip', 'Horror', 'Sci-Fi', 'All']

    const comics = [{category: 'Action', title: 'Dragon Ball'},
                    {category: 'Action', title: 'Naruto'},
                    {category: 'Action', title: 'The Avengers'},
                    {category: 'Fantasy', title: 'Faeries and angels'},
                    {category: 'Fantasy', title: 'Tales of a Swordsman'},
                    {category: 'Fantasy', title: 'Heroes of the Realm'},
                    {category: 'Slice of Life', title: 'My Life'},
                    {category: 'Slice of Life', title: 'A students life'},
                    {category: 'Comic Strip', title: 'Mafalda'},
                    {category: 'Horror', title: 'Call of Chuthulu'},
                    {category: 'Sci-Fi', title: 'The Eternaut'},
                    {category: 'Sci-fi', title: 'Futurama'},]

    const filteredComics = (category == 'All' ? comics : comics.filter(comic=> comic.category == category))
    return(
        <div className="container">
            <h2>Categories {category ? `: ${category}` : ''}</h2>
            {category ? 
            <>
                < CategoriesSelector
                categories={categories}
                setCategory={setCategory}
                />
                <div className="comics-by-category">
                    {filteredComics.map(comic=><div>{comic.title}</div>)}
                </div>
            </>
            :
           < BigCategorySelector
            categories={categories}
            setCategory={setCategory}
          /> }
        </div>
    )
}

export default Categories;