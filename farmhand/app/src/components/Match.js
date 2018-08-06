import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'


import {Card, CardModal} from '../containers'
import {cardBackSrc} from '../utils'


const Match= ({
		cardModalActions,
		cardModalData, 
		cardModalVis, 
		closeModal,
		endTurn,
		history, 
		market, 
		marketArray,
		nextPlayerDeck,
		nextPlayerDiscard,
		nextPlayerHand,
		nextPlayerUser,
		previousPlayerDeck,
		previousPlayerDiscard,
		previousPlayerHand,
		previousPlayerUser,
		trashPile,
		userDeck,
		userDiscard,
		userHand,
		user,
		userPlayerNumber,
	}) => (
	<div className="App container-fluid" style={{"height": "99vh"}} >
   		<div className="row testingMatch" style={{"height": "100%"}}>
	   		<div className="col-sm-2 column">
	   			<div style={{"height": "45%"}}>
					<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    			<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
				</div>
	    		<div style={{"height": "5%"}}>{previousPlayerUser} Info</div>
	   			<div style={{"height": "45%"}}>
					<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    			<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    		</div>
	    		<div style={{"height": "5%"}}>{nextPlayerUser} Info</div>
	   		</div>
	    	<div className="col-sm-7 column">
	    		<div style= {{"height": "30%"}} className="market">
	    			<Card  place="market" id={marketArray[0]} />
	    			<Card  place="market" id={marketArray[1]} />
	    			<Card  place="market" id={marketArray[2]} />
	    			<Card  place="market" id={marketArray[3]} />
	    			<Card  place="market" id={marketArray[4]} />
	    			<div className="starterFieldAndPlenty" style={{"maxWidth": (100/6-1)+"%"}}>
	    				<div className="marketObject" >Starter Field</div>
	    				<div className="marketObject" >Plenty</div>
	    			</div>
	    		</div>
	    		<div style= {{"height": "35%"}}>Play Area</div>
	    		<div style= {{"height": "5%"}}>
	    			{user}: {userPlayerNumber} 
	    			<button onClick={() => endTurn(userPlayerNumber, userDeck, userDiscard, userHand)}>End Turn</button>
	    		</div>
	    		<div style= {{"height": "30%"}} className="yourHand">
	    			{userHand.map((i, index) => (
						<Card  place="userHand" id={i} />
					))}
	    		</div>
	    	</div>
	    	<div className="col-sm-3 column">
	    		<div style= {{"height": "25%"}}>
	    			<img className="communityField" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    		</div>
	    		<div style= {{"height": "50%"}}>
	    			<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    			<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />	    			
	    		</div>
	    		<div style={{"height": "5%"}}>Buffer Zone</div>
	    		<div style= {{"height": "20%"}}>
	    			<div className="userDeckArea">
		    			<img className="yourDeck" src={cardBackSrc} alt="cardBack" />
		    			<div className="textOverImage">{userDeck===null ? 0 : userDeck.length}</div>
		    			<img className="yourDiscard" src="https://image.ibb.co/j6WSR8/Recycle.png" alt="Recycle" />
		    		</div>
	    		</div>
	    	</div>
	    	<CardModal actions={cardModalActions} data= {cardModalData} vis= {cardModalVis} />
	    </div>
	</div>
)

Match.propTypes = {

}

export default Match;