import React from "react";

function Article(props) {
    const {article} = props
    const body = <section>{article.text}</section>
    return (
        <div className='hello' style={{color: 'red'}}>
            <h2>{article.title}</h2>
            {body}
            <h2>creation date: {(new Date(article.date).toDateString())}</h2>
        </div>
    )
}

export default Article