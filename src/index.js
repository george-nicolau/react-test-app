import React from 'react'
import {render} from 'react-dom'

function Article() {
    const body = <section>body</section>
    return (
        <div className='hello' style={{color: 'red'}}>
            <h2>title</h2>
            {body}
            <h2>creation date: {(new Date().toDateString())}</h2>
        </div>
    )
}

function App() {
    return (
        <div>
            <h2>App name</h2>
            <Article/>
        </div>
    )
}

render(<App/>, document.getElementById('root'))