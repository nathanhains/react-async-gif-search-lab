import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends React.Component{

    constructor(){
        super()
        this.state = {
            firstThree: [],
            search: ''
        }
    }

    handleSubmit = (info) => {
        this.setState({
          search:info
        }, this.fetchGifs())
    
      }

      componentDidMount(){
          this.fetchGifs()
      }

    fetchGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=97YzfwcuQMhBdO4wFLVYQ6KNhwCDuUur&rating=g`)
        .then(res => res.json())
        .then(data =>{
            this.setState({firstThree: data.data.slice(0,3)})
        })
    }

    render(){
        return <div>
            <GifList firstThree={this.state.firstThree}/>
            <GifSearch handleSubmit={this.handleSubmit} />
        </div>
    }
}