import React from 'react'
export default class GifList extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <ul>
                {this.props.firstThree.map(element => <img key={element.id}src={element.bitly_gif_url}></img>)}
            </ul>
        )
        
    }
}