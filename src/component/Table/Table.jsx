import React from "react";
import './css/Table.scss'

export default function Table({handler, turn}) {
    return (
        <div className={'main-table'}>
            {
                turn ?
                    turn.map((item, index) =>
                        <div className={`${item ? item === 'x' ? 'close' : 'circle' : ''}`}
                             onClick={() => handler(index)}
                             key={index}><span/>
                        </div>
                    )
                    : <p>test</p>
            }
        </div>
    )
}