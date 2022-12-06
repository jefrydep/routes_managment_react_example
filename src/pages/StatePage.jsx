import React, { useState } from 'react'

const StatePage = () => {

    const [isDark, setIsDark] = useState(true)
    const changeThem = () => {
        setIsDark(!isDark)
        console.log(`changin them :${isDark}`);



    }
    console.log(isDark);




    return (
        < >
            {/* {
                isDark ? <div className='red'>

                    <h1>state Page</h1>
                </div> : <div className='green'>

                    <h1>state Page</h1>
                </div>
            } */}
            <div className={isDark ? 'red' : 'green'}>

                <h1>state Page</h1>
            </div>
            <hr />
            {
                (isDark) ? <button onClick={changeThem} > dark</button> : <button onClick={changeThem} > light</button>}



        </ >
    )
}

export default StatePage