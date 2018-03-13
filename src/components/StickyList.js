import React from 'react';
import { connect } from 'react-redux';

const StickyList = ({ stickies }) => (
  <ul>
    { stickies.map( (t,i) => {
      return (
        <li key={i}>
          {t.name}
        </li>
      )
     })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { stickies: state.stickies }
}

export default connect(mapStateToProps)(StickyList)
