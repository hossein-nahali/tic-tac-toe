import React from "react";
import './css/Turn.scss'

export default function Turn({turn}) {

    return (
        <div className={'turn'}>
            <div className={`box-turn ${turn === 'x' ? 'active-player-x' : 'active-player-o'}`}>
                <span className="player-x"/>
                <span className="player-o"/>
            </div>
        </div>
    )
}