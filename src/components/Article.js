import React from 'react';
import { Link } from "react-router-dom";

class Article extends React.Component{


    constructor (props){
        super(props)

        this.state = {

            }
    }

    render()
    {
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && <section>{article.text} </section>
        return(
            <div className='article'>
                <div >
                    <h2>
                        <Link to={`/${article.id}`}>  {article.title}</Link>
                        <button onClick={onButtonClick}>
                            {isOpen ? 'close':'open'}
                        </button>
                    </h2>

                </div>

                <div >
                    <h6 >creation date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
            </div>
    )
    }

}

export default Article