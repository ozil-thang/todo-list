import React, {Component} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {

  state={
    items:[],
    id:null,
    item:'',
    editItem:false
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      title: this.state.item
    }

    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      item: "",
      id: null,
      editItem: false
    })
  } 

  handleSave = (event) => {
    const updateItems = this.state.items.slice();
    const index = updateItems.findIndex(item => item.id === this.state.id)
    updateItems[index].title = this.state.item;

    this.setState({
      items: updateItems,
      item: "",
      id: null,
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  }

  handleEdit = (id) => {
    const selectedItem = this.state.items.find(item => item.id == id);
    this.setState({
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  }

  handleCancelEdit = () => {
    this.setState({
      item: "",
      editItem: false,
      id: null
    })
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              Todo Input
            </h3>
            <TodoInput 
              item={this.state.item} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit} 
              editItem={this.state.editItem}
              handleCancelEdit={this.handleCancelEdit}
              handleSave={this.handleSave}/>
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
