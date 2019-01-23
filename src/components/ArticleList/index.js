import React,{PureComponent} from 'react'
import  Article from '../Article'
import './style.css'

export default class ArticleList extends PureComponent {


    state = {
            openArticleId: null
        }
    render(){
        // const { data } = this.props
        // if (data.length){}
        const articleElements = this.props.articles.map((article, index)=>
        
            <li  key = {article.id} className="news" className="article-list__li">
                <Article article = {article} isOpen = {this.state.openArticleId === article.id} onButtonClick = {this.handleClick.bind(this, article.id)}/>
            </li>)
        return(
            <ul>
                {articleElements}
                {
                     articleElements.length ? <strong className={'news__count'}>Count all news: {articleElements.length}</strong> : null
                }
            </ul>
        )
    }

    handleClick = openArticleId => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    })
}

