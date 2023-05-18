import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import item from "./components/Item";
import Categories from "./components/Categories";
class App extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Стул серый',
                    img: 'chair_grey.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Стол',
                    img: 'table.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'tables',
                    price: '149.99'
                },
                {
                    id: 3,
                    title: 'Диван',
                    img: 'couch.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'couch',
                    price: '549.99'
                },
                {
                    id: 4,
                    title: 'Лампа',
                    img: 'lamp.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'lamp',
                    price: '25.99'
                },
                {
                    id: 5,
                    title: 'Стул белый',
                    img: 'chair_white.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 6,
                    title: 'Тумба',
                    img: 'stand.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'stand',
                    price: '249.99'
                },
            ]
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
    }
    render () {
    return (
    <div className='wrapper'>
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
      <Footer/>
    </div>
  );
 }

 chooseCategory(category) {
        if(category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
 }

 deleteOrder (id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
 }
 addToOrder (items) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id) {
               isInArray = true
            }
        })
     if(!isInArray)
        this.setState({orders: [...this.state.orders, items]})
 }
}

export default App;