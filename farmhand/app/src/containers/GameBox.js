import React from 'react'
import { connect } from 'react-redux'
import {GameBox} from '../components'
import {openRules} from '../utils'
import {fromHeader} from '../actions'


const mapStateToProps= state => (
	{}
)

const mapDispatchToProps= dispatch => ({
	openRules: () => {openRules(); },
	openLoginFromPlay: () => { dispatch(fromHeader.openLoginFromPlay()); },
	playRedirect: history => { history.push('/lobby') },
})


export default connect(mapStateToProps, mapDispatchToProps)(GameBox)