import React from 'react';
import { connect } from 'react-redux';

const StickyList = ({ stickies }) => (
  <ul>
    { stickies.map( (t) => {
      return (
        <li key={t}>
          {t}
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
