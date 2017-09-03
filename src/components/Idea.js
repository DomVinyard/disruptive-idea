import React, { Component } from 'react'
import {SortableElement} from 'react-sortable-hoc'
import TimeAgo from 'react-timeago'
import { Textfit } from 'react-textfit'
    
class Idea extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <li
        id={this.props.data.id}
        style={{
          display: 'inline-block',
          width: 130,
          height: 130,
          margin: 10,
          fontFamily: 'sans-serif',
          overflow: 'hidden',
          background: 'rgb(230, 230, 230)',
          textAlign: 'left',
          padding: 10,
          color: 'rgb(80, 80, 80)',
          cursor: 'move'
        }}
        onClick={this.props.startEdit}
      >

        <div
          style={{
            fontSize: '0.7em',
            color: '#747474',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none'
          }}
        >
          <TimeAgo date={this.props.data.created_date} />
        </div>
      
        <Textfit
          mode="multi"
          style={{
            marginTop: 4,
            height: 112,
            fontFamily: this.props.data.font,
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none'
          }}
        >
          {this.props.data.body}
        </Textfit>

      </li>
    )
  }
}

export default SortableElement(({ value, startEdit }) => <Idea data={ value } startEdit={ startEdit } />)
