import React from 'react'
import data from '../../data/entityData.js'

class BentoBoy extends React.Component {
    render() {
        return(
            <div className="bento Image">
                <img src={data[0].image} alt="boy bento" width="300" height="300"></img>
            </div>
        )
    }
}

export default BentoBoy