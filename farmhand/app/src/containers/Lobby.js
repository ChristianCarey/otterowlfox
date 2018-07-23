import { connect } from 'react-redux'
import {Lobby} from '../components'
import {getMatches, createMatch} from '../utils'


const mapStateToProps= state => (
	{
		matches: getMatches(),
	}
)

const mapDispatchToProps= dispatch => ({
	createMatch: () => { console.log("about to call create match from lobby container"); createMatch(); },
})

export default connect(mapStateToProps, mapDispatchToProps)(Lobby)