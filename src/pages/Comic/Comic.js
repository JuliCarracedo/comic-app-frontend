import React from "react";

const Comic = () => {
    const chapters = [{number: 1, title: 'Furst Chaprer', description: 'Loremm ipsum dolor sit amet'},
                    {number: 4, title: 'Furt Chaprer', description: 'Loremm ipsum dolor sit amet'}, 
                    {number: 3, title: 'Tirud Chaprer', description: 'Loremm ipsum dolor sit amet'},
                    {number: 2, title: 'Bind Chaprer', description: 'Loremm ipsum dolor sit amet'},
                    {number: 5, title: 'Quint Chaprer', description: 'Loremm ipsum dolor sit amet'} ]

     return (
        <div className="container">
            <h2>Comic Title</h2>
            <p> X Likes </p>
            <p> X Followers </p>
            <ul className="chapters-list">
                {
                   chapters.sort((a,b)=>a.number < b.number ? -1 : 1).map(
                       chapter => < li key={chapter.number}>
                           <h3>{chapter.title}</h3> 
                           <p>{chapter.description}</p>
                           <p> x Likes</p>
                           </li>
                   ) 
                }
            </ul> 
        </div>
     )
}

export default Comic