import React from 'react'
import {render} from 'react-dom'
import App from './components/App'

import SingleArticle from'./components/ArticleList/SingleArticle'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path = "/:id" component = {SingleArticle}/>
            </Switch>
        </div>
    </Router>,
    document.getElementById("root")
)

