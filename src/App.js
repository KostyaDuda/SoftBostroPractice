import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const myNews = [
  {
     id: 0,
     author: 'Саша Печкин',
     text: 'В четверг, четвертого числа...',
     bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
     },
{
     id: 1,
     author: 'Просто Вася',
     text: 'Считаю, что $ должен стоить 35 рублей!',
     bigText: 'А евро 42!'
},
{
     id: 2,
     author: 'Max Frontend',
     text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
     bigText: 'А евро опять выше 70.'
},
{
     id: 3,
     author: 'Гость',
     text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru',
     bigText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
}
  ];

  class ModalSwitch extends React.Component {
    previousLocation = this.props.location;
  
    componentWillUpdate(nextProps) {
      let { location } = this.props;
  
      // set previousLocation if props.location is not modal
      if (
        nextProps.history.action !== "POP" &&
        (!location.state || !location.state.modal)
      ) {
        this.previousLocation = this.props.location;
      }
    }
  
    render() {
      let { location } = this.props;
  
      let isModal = !!(
        location.state &&
        location.state.modal &&
        this.previousLocation !== location
      ); // not initial render
  
      return (
          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path="/" component={All_news} />
            <Route path="/img/:id" component={ImageView} />
          </Switch>
      );
    }
  }

  function ImageView({ match }) {

    let article = myNews[parseInt(match.params.id, 10)];

  if (!article) return <div>Image not found</div>;
    return (
      <React.Fragment>
        <div>
          <h3 id>{article.text}</h3>
          <div>
            <p>{article.bigText}</p>
            <p>{article.author}</p>
          </div>

        </div>
      </React.Fragment>
    );
  }
  
  class Article extends React.Component {
    state = {
    visible: false,
   }
       handleReadMoreClck = (e) => { // добавили метод
       e.preventDefault()
       this.setState({ visible: true })
}
       render() {
       const { id,author, text, bigText } = this.props.data
       const { visible } = this.state
       return (
        <div className='article'>
          <p className='news__author'>{author}:</p>
          <p className='news__text'>{text}</p>
   { /* добавили onClick */
            !visible && <a onClick={this.handleReadMoreClck} href="#" className='news__readmore'>Подробнее</a>
   }
   {
            visible && <p className='news__big-text'>{bigText}</p>
   }
   {
            visible && <Link to={`/img/${id}`}>Читать</Link>
   }

 </div>
)
}
}

class All_news extends React.Component{
  render(){
    return(
      <React.Fragment>
       <h3>Новости</h3>
       <News data={myNews}/>
     </React.Fragment>
    )
  }
}
 class News extends React.Component {
   render() {
     const { data } = this.props
     let newsTemplate

     if (data.length) {
       newsTemplate = data.map(function(item) {
         return <Article key={item.id} data={item}/>
       })
     } else {
       newsTemplate = <p>К сожалению новостей нет</p>
     }

     return (
       <div className="news">
         {newsTemplate}
         {
           data.length ? <strong className={'news__count'}>Всего новостей: {data.length}</strong> : null        
         }
       </div>
     );
   }
 }

 class TestInput extends React.Component {
  state = {
    myValue: '',
  }
  // используется e.currentTarget.value
  onChangeHandler = (e) => {
    this.setState({ myValue: e.currentTarget.value })
  }
  onBtnClickHandler = (e) => {
    alert(this.state.myValue);
  }
  render() {
    return (
      <input
      className='test-input'
      onChange={this.onChangeHandler}
      value={this.state.myValue} 
      placeholder='введите значение' />
    )
  }
}

 const App = () => {
   return (
    <Router>
    <Route component={ModalSwitch} />
  </Router>
   )
 }

export default App;
