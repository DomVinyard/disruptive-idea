import React, { Component } from 'react'
import bulbThumb from './bulb.png'
import bulbGif from './bulb.gif'
import './App.css'
import { arrayMove } from 'react-sortable-hoc'
import uuid from 'uuid'
import NotificationSystem from 'react-notification-system'

import defaultData from './defaultData.js'

import List from './components/List'
import InputField from './components/InputField'
import Start from './components/Start'


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = { ideas: this.loadBackup() }
  }
  
  showNotification(message) {
    this.refs.notificationSystem.addNotification({
      message,
      level: 'info',
      position: 'tr',
      autoDismiss: 2,
      dismissible: false
    });
  }
  
  backupToLocal(ideas) {
    const backup = JSON.stringify(ideas)
    localStorage.setItem('ideas', backup)
  }
  
  loadBackup() {
    const ideas = localStorage.getItem('ideas')
    if (!ideas) return false
    return JSON.parse(ideas)
  }
  
  componentDidMount() {
    if (this.state.ideas) this.showNotification(`GET ideas/`)
  }
  
  startDemo() {
    this.backupToLocal(defaultData)
    this.setState({ ideas: defaultData })
  }
  
  resetDemo() {
    localStorage.removeItem('ideas')
    this.setState({ ideas: false })
  }
  
  onSortEnd({oldIndex, newIndex}) {
  	const ideas = arrayMove(this.state.ideas, oldIndex, newIndex)
    this.showNotification(`POST ideas/sort/`)
    this.setState({ ideas })
    this.backupToLocal(ideas)
  }
  
  onAddItem(body) {
    const newIdea = {
      id: uuid(),
      created_date: new Date(),
      body
    }
    const ideas = [newIdea, ...this.state.ideas]
    this.setState({ ideas })
    this.backupToLocal(ideas)
    this.showNotification(`GET ideas/new/`)
    setTimeout(() => this.showNotification(`POST ideas/update/`), 800)
    document.getElementById('bulb').src = bulbGif
  }
  
  onDeleteItem(id) {
    const ideas = this.state.ideas.filter(idea => idea.id !== id)
    this.showNotification(`POST ideas/delete/`)
    this.setState({ ideas })
    this.backupToLocal(ideas)
  }
  
  onEditItem(id, newBody) {
    const ideas = this.state.ideas.map(idea => {
      if (idea.id !== id) return idea
      return Object.assign({}, idea, { created_date: new Date(), body: newBody })
    })
    this.showNotification(`POST ideas/update/`)
    this.setState({ ideas })
    this.backupToLocal(ideas)
  }
  
  render() {
    
    if (!this.state.ideas) {
      return <Start onStartDemo={this.startDemo.bind(this)}/>
    }
    
    return (
      <div className="App">
        <NotificationSystem ref="notificationSystem" />
        <div
          style={{
            backgroundColor: 'rgb(49, 43, 44)',
            padding: 20
          }}
        >
          <div
            style={{
              textAlign: 'left',
              fontSize: '0.8em',
              cursor: 'pointer'
            }}
          >
            <a
              style={{
                color: '#eee'
              }}
              onClick={this.resetDemo.bind(this)}
            >
              reset demo
            </a>
          </div>
          <img
            src={bulbThumb}
            id="bulb"
            style={{
              width: 300,
              height: 168,
              marginTop: 46,
              MozUserSelect: 'none',
              WebkitUserSelect: 'none',
              msUserSelect: 'none'
            }}
          />
          <InputField 
            onAddItem={this.onAddItem.bind(this)}
          />
        </div>
        <div
          style={{
          }}
        >
          <List
            ideas={this.state.ideas}
            axis="xy"
            distance={20}
            useWindowAsScrollContainer={true}
            onSortEnd={this.onSortEnd.bind(this)}
            onDelete={this.onDeleteItem.bind(this)}
            onEdit={this.onEditItem.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
