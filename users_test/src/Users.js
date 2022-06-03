import React, { Component } from 'react'

export default class Users extends Component {
    state = {
        data: []
    }

    getData = () => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => this.setState({ data: data }))
    }

    componentDidMount() {
        this.getData()
    }

    
    render() {

        console.log(this.state.data)
        
        return (
           
            <div>
                
                
                <ol>
                    {this.state.data.map((user) => (
                        <li key={user.id}>{user.name}</li>
                        
                        
                    ))}
                </ol>
            </div>
        )
    }
}
