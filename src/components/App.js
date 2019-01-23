import React, {PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'


class App extends PureComponent {
    state = {
        reverted:false
    }

    render() {
        return (
            <div>
                <div>
                    <h1>
                        NEWS
                    </h1>
                </div>
                <ArticleList articles={ this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }

    revert = () => {
        this.setState({
        reverted: !this.state.reverted
        })
    }
}

export default App