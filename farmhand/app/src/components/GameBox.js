import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

import {getCookie} from '../utils'
import cardBack from '../images/cardBack.png';


const GameBox= ({cardBack, history, openLoginFromPlay, openRules, playRedirect}) => (
  <div id="FHBox">
    <img src={cardBack} alt="Farm Hand Card Back" />
    <div id="FHText">
      <div id="FHTitle">Farm Hand</div>
      <button 
        onClick={ () => getCookie('user') === null ? openLoginFromPlay() : playRedirect(history)}
        className="btn"
      >
        Play
      </button>
      <button onClick={openRules} className="btn">Rules</button>
    </div>
  </div>
)

GameBox.propTypes = {

}

export default GameBox;