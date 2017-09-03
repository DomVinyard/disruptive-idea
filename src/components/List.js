import React, { Component } from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import Idea from './Idea'
import InputField from './InputField'
import Modal from 'react-awesome-modal'
import Hasher from 'string-hash'
      
import fonts from '../fonts.js'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentEdit: false,
      editing: false
    }
  }

  openModal(idea) {
    this.setState({
      editing : true,
      currentEdit: idea
    });
    const editbox = document.querySelectorAll('#editmodal textarea')[0]
    editbox.value = idea.body
    editbox.focus()
  }

  closeModal() {
    this.setState({
      editing : false,
      currentEdit: false
    })
    document.querySelectorAll('textarea')[0].focus()
  }
  
  onEditItem(newbody) {
    const edit = this.state.currentEdit
    this.props.onEdit(edit.id, newbody)
    this.setState({
      editing : false,
      currentEdit: false
    })
  }
  
  onDeleteItem() {
    const edit = this.state.currentEdit
    this.props.onDelete(edit.id)
    this.setState({
      editing : false,
      currentEdit: false
    })
  }
  
  render() {
    return (
      <div
        id='editmodal'  
      >
        <Modal
          visible={this.state.editing}
          width="400"
          effect="fadeInUp"
          style={{
            backgroundColor: 'rgb(158, 158, 158)'
          }}
          onClickAway={() => this.closeModal()}
        >
          <a
            href="javascript:void(0);"
            onClick={() => this.closeModal()}
            style={{
              float: 'right',
              color: 'white',
              textDecoration: 'none',
              fontSize: '3em',
              opacity: '0.5',
              marginRight: 50,
              marginTop: 40
            }}
          >X</a>
          <button
            style={{
              float: 'left',
              marginTop: 48,
              marginLeft: 48,
              fontSize: '1.5em',
              background: 'firebrick',
              border: 0,
              color: 'white',
              padding: '6px 24px',
              borderRadius: 8
            }}  
            onClick={this.onDeleteItem.bind(this)}
          >DELETE</button>
          <div
            style={{
              background: 'rgb(47, 47, 47)',
              paddingTop: 110,
              paddingBottom: 4
            }}
          >
            <InputField
              onAddItem={this.onEditItem.bind(this)}
            >
            </InputField>
          </div>
        </Modal>
        <ul
          style={{
            paddingLeft: 0,
            maxWidth: 800,
            margin: '24px auto',
            textAlign: 'center',
            listStyleType: 'none'
          }}
        >
          {this.props.ideas.map((value, index) => {
            const key = `idea-${index}`;
            const fontIndex = Math.floor((Hasher(value.id) / 4294967295) * fonts.length)
            value.font = fonts[fontIndex]
            return (<Idea
               key={key}
               index={index}
               value={value}
               startEdit={() => this.openModal(value)}
            />)
          })}
        </ul>
      </div>
    )
  }
}

export default SortableContainer(({ ideas, onEdit, onDelete }) => <List ideas={ ideas } onEdit={onEdit} onDelete={onDelete} />)

