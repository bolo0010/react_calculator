import React from 'react';
import Key from './Key';

const keys = [
    {
        id: 0,
        key_name: 'Reset',
        key_fun: 'CE'
    },
    {
        id: 1,
        key_name: 'Delete',
        key_fun: '<'
    },
    {
        id: 2,
        key_name: 'Division',
        key_fun: '/'
    },
    {
        id: 3,
        key_name: 'Seven',
        key_fun: 7
    },
    {
        id: 4,
        key_name: 'Eight',
        key_fun: 8
    },
    {
        id: 5,
        key_name: 'Nine',
        key_fun: 9
    },
    {
        id: 6,
        key_name: 'Multiplication',
        key_fun: 'X'
    },
    {
        id: 7,
        key_name: 'Four',
        key_fun: 4
    },
    {
        id: 8,
        key_name: 'Five',
        key_fun: 5
    },
    {
        id: 9,
        key_name: 'Six',
        key_fun: 6
    },
    {
        id: 10,
        key_name: 'Subtraction',
        key_fun: '-'
    },
    {
        id: 11,
        key_name: 'One',
        key_fun: 1
    },
    {
        id: 12,
        key_name: 'Two',
        key_fun: 2
    },
    {
        id: 13,
        key_name: 'Three',
        key_fun: 3
    },
    {
        id: 14,
        key_name: 'Addition',
        key_fun: '+'
    },
    {
        id: 15,
        key_name: 'Opposite value',
        key_fun: '+/-'
    },
    {
        id: 16,
        key_name: 'Zero',
        key_fun: 0
    },
    {
        id: 17,
        key_name: 'Point',
        key_fun: '.'
    },
    {
        id: 18,
        key_name: 'Equal',
        key_fun: '='
    }
]

const Keyboard = ({ click }) => {
    const keyboard = keys.map(key =>
        (
            <Key key={key.id} {...key} click={click} />
        )
    )
    return (
        <div className="keyboard">
            {keyboard}
        </div>
    );
}

export default Keyboard;