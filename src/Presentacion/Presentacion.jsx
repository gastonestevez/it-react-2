import React, { Component } from 'react'

export default class Presentacion extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }
    }

    componentDidMount(){
        console.log('<< DID MOUNT! >>')
    }

    componentDidUpdate(){
        console.log('<< DID UPDATE >>')
    }

    shouldComponentUpdate(){
        return this.state.contador < 6
    }

    handleContador() {
        const incremento = this.state.contador + 1
        this.setState({
            contador: incremento
        })
        this.props.incrementar(incremento)
    }

    render() {
        return (
            <>
                <div>
                    <p>Nombre: {this.props.persona.nombre}</p>
                    <p>Edad: {this.props.persona.edad}</p>
                    <p>Fav: {this.props.persona.numeroFavorito}</p>
                </div>
                <div>
                    <p>Contador: {this.state.contador}</p>
                    <button onClick={() => this.handleContador()}>Incrementar</button>
                </div>
            </>
        )
    }
}
