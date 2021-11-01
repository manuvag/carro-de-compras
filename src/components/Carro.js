import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles ={
  carro: {
    backgroundColor:'#359a2c',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius:'5px',
    cursor: 'pointer',
  }, 
  bubble: {
    position: 'relative',
    left:12,
    top: 20
  }
}

class Carro extends Component{
  render(){
    const { carro , esCarroVisible, mostrarCarro } = this.props
    const cant = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return(
      <div>
        <span style={styles.bubble}>
          { cant !==0 
            ? <BubbleAlert value={cant} />
            :null
          }
        </span>
        <button 
          style={styles.carro}
          onClick={mostrarCarro}
        >
          Carro
        </button>
        { esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    )
  }
}

export default Carro
