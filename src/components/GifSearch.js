import React from 'react'
export default class GifSearch extends React.Component{

    constructor(){
        super()
        this.state={
            search: ''
        }
    }

    handleChange = (e) =>{
        this.setState({
          search:e.target.value
        })
  
    }

    render(){

        return <div>
            <form onSubmit={event =>{
        event.preventDefault();
        this.props.handleSubmit(this.state.search)}
      }>
        <input type='text' onChange={this.handleChange}/>
        <input type='submit' />
      </form>
        </div>
    }
}