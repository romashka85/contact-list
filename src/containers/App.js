import React, { Component } from "react";
import Contact from "../components/Contact";
import AddButton from '../components/AddButton';
import EditForm from '../components/EditForm';
import AddForm from '../components/AddForm';
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{cursor: "pointer"}} onClick={() => this.onRouteChange('home')}>
            <h2>Contact Manager</h2>
          </div>
          
        </header>
        {this.state.route === 'home' ?
        <div>
          <AddButton onRouteChange={this.onRouteChange}/>
          <Contact onRouteChange={this.onRouteChange}/>
        </div>
          : (
            this.state.route === 'addForm' ?
            <AddForm onRouteChange={this.onRouteChange}/>
            : (
              this.state.route === 'editForm' ?
              <EditForm />
              :
              console.log('Not found')
            )
          )
        }
      </div>
    );
  }
}

export default App;
