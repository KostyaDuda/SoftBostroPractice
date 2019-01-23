import React,{Component} from 'react'
import articles from '../../fixtures'
import { Link } from "react-router-dom";

class SingleArticle extends Component{


    render(){

        const articleId = this.props.match.params.id;

        let article;
        for(var i=0; i<articles.length; i++){
            if(articles[i].id===articleId){
                article = articles[i];
                break;
            }
        }
        const body = <section>{article.text} </section>
        console.log(this.props);
        if(articleId===undefined)
            return <h2> Стаття не знайдена </h2>;
        else
            return (<div>
                <div>
                    <div >
                        <h1> {article.title} </h1>
                    </div>

                    <div className='article'>
                        <h6 className="card-subtitle text-muted">creation date: {(new Date(article.date)).toDateString()}</h6>
                        {body}
                        <Link to={`/`}>Назад</Link>
                    </div>
                </div>
            </div>);
    }
}

export  default  SingleArticle