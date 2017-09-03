import React, { Component } from 'react'
import bulbThumb from './../bulb.png'

export default class Start extends React.Component {
  render() {
    return (
      <div
        style={{
          width: 600,
          margin: '0 auto'
        }}  
      >
        <div
          style={{
            textAlign: 'center',
            fontSize: '1.75em',
            marginTop: 32,
            fontFamily: 'Amatica SC'
          }}  
        >
          <img
            src={bulbThumb}
            id="bulb"
            style={{
              width: 300,
              height: 168,
              marginTop: 48,
              marginBottom: 6,
              MozUserSelect: 'none',
              WebkitUserSelect: 'none',
              msUserSelect: 'none'
            }}
          />
          <div style={{marginBottom: '4px'}}>type an idea and press enter</div>
          <div style={{fontSize: '1.02em'}}>click to edit or delete</div>
          <div style={{fontSize: '1.19em'}}>drag idea to re-order</div>
        </div>
        <div
          style={{
            textAlign: 'center'
          }}  
        >
          <button
            style={{
              fontSize: '3em',
              marginTop: 16,
              padding: 16,
              width: 300,
              fontFamily: 'Londrina Solid',
              background: 'rgb(49, 43, 44)',
              color: 'white',
              border: 'none'
            }}  
            onClick={this.props.onStartDemo}  
          >
            GET STARTED
          </button>
        </div>
        <div
          style={{
            fontSize: '0.7em',
            width: 300,
            margin: '128px auto 16px auto',
            textAlign: 'justify',
            opacity: '0.45'
          }}  
        >
          <a
            style={{
              fontSize: '8em',
              float: 'left',
              marginLeft: -35,
              marginTop: -35
            }}  
          >*</a>
          <p>
            This is an intepretation of the supplied spec. It differs in a couple of subtle ways. The 'blank idea box' is always visible and focused because when an idea hits, the user wants to get it down straight away, no superfluous clicking, no messing, no risk of forgetting. There is no title field because 140 characters is too short-form for a title to make sense. 
          </p>
          <p>
            As for the stretch, sorting became un-necessary without a title field so I implemented a draggable re-ordering system. The character count is always visible because when the user starts typing an idea they need to know straight away that they're going to be limited in length. It might change the structure of their phrasing. When they reach the final 15 characters the character count turns red. The delete action is on click/tap rather than hover because there is no concept of hover on touch devices and we want to work on mobile. Notifications have been used to highlight where the HTTP requests would be but I wouldn't use these to show the user that the idea has been saved, I would use them to warn and instruct the user on the odd occasion that the idea could not be saved.
          </p>
        </div>
      </div>
    )
  }
}