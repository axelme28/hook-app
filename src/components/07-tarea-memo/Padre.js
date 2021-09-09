import React from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import { useCallback } from 'react';

import '../01-UseState/CounterApp.css'

export const Padre = () => {

    const numeros = [2,4,6,8,10,20];
    const [valor, setValor] = useState(0);


    const incrementar = useCallback(
        () => {
            setValor(v => v+1)
        },
        [setValor],
    )


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
