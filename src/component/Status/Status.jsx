import React from "react";
import './css/Status.scss'

export default function Status({player}) {

    return (
        <div className={`status-game ${player !== '' ? 'active' : ''}`}>
            {player !== 'n' && <span className={`${player ? player === 'x' ? 'close' : 'circle' : ''}`}/>}
            {player === 'x' || player === 'o' ? player === 'x' ? <p className={'winner-x'}>winner</p> :
                <p className={'winner-o'}>winner</p> : <p className={'no-winner'}>no winner</p>}
        </div>
    )
}