import React from 'react'
import data from '../../data/entityData.js'

class BentoBoy extends React.Component {
    render() {
        return(
            <div className="character-image">
                <div className="centerText">
                    <img src={data[0].image} alt="Kaneki Ken" width="300" height="300"></img>
                </div>
            </div>
        )
    }
}

export default BentoBoy