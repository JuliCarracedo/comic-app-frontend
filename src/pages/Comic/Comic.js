import React from "react";
import '../../styles/comic.css'
import ChapterCard from "../Comic-Card/ChapterCard";
import SuggestionCard from "../Comic-Card/SuggestionCard";

const Comic = () => {
    const chapters = [{number: 1, title: 'Furst Chaprer', description: 'Loremm ipsum dolor sit amet'},
                    {number: 4, title: 'Furt Chaprer', description: 'Loremm ipsum dolor sit amet'}, 
                    {number: 3, title: 'Tirud Chaprer', description: 'Loremm ipsum dolor sit amet'},
                    {number: 2, title: 'Bind Chaprer', description: 'Loremm ipsum dolor sit amet'},
                    {number: 5, title: 'Quint Chaprer', description: 'Loremm ipsum dolor sit amet'} ]
    const suggestions = [{category: 'Action', title: 'Dragon Ball'},
                    {category: 'Action', title: 'Naruto'},
                    {category: 'Action', title: 'The Avengers'}]

     return (
        <div className="container">
            <h2>Comic Title</h2>
            <h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus erat ac mauris volutpat facilisis. Fusce malesuada ex in nisl ornare, at ornare augue condimentum. Nullam mattis nisi id dui.</h3>
            <div className="stats">
                <p> X Likes </p>
                <p> X Followers </p>
            </div>
            <div className="comic-body">
            
            <ul className="chapters-list">
                {
                   chapters.sort((a,b)=>a.number < b.number ? -1 : 1).map(
                       chapter => < li key={chapter.number}>
                            < ChapterCard chapter={chapter} />
                           </li>
                   ) 
                }
            </ul> 

            <ul className="similar-comics">
                <li><h3>Similar comics</h3></li>
                {
                   suggestions.map(comic=> <SuggestionCard suggestion={true} comic={comic}/>)
                }
            </ul> 
            </div>
        </div>
     )
}

export default Comic