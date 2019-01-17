import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const myNews = [
  {
     id: 1,
     author: 'Саша Печкин',
     text: 'В четверг, четвертого числа...',
     bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
     },
{
     id: 2,
     author: 'Просто Вася',
     text: 'Считаю, что $ должен стоить 35 рублей!',
     bigText: 'А евро 42!'
},
{
     id: 3,
     author: 'Max Frontend',
     text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
     bigText: 'А евро опять выше 70.'
},
{
     id: 4,
     author: 'Гость',
     text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru',
     bigText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
}
  ];

  class Article extends React.Component {
    state = {
    visible: false,
   }
handleReadMoreClck = (e) => { // добавили метод
e.preventDefault()
this.setState({ visible: true })
}
render() {
const { author, text, bigText } = this.props.data
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
 </div>
)
}
}

// Article.propTypes = {
// data: PropTypes.shape({
// author: PropTypes.string.isRequired,
// text: PropTypes.string.isRequired,
// bigText: PropTypes.string.isRequired // добавили propTypes для bigText
// })
// }

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

 const App = () => {
   return (
     <React.Fragment>
       <h3>Новости</h3>
       <News data={myNews}/>
     </React.Fragment>
   )
 }

export default App;
