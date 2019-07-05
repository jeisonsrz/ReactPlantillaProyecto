import React, { Component } from "react";
import { connect } from "react-redux";
import { mostrarProductos } from "../../actions/productosActions";
import Producto from "./Producto";
import LinkButton from './LinkButton';

class Productos extends Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }
  render() {
    const { productos } = this.props;
    return (
      <div className="container">
        <h1>Listado de productos</h1>
        {productos.map((producto, index) => {
          return <Producto key={index} producto={producto} />;
        })}
       <LinkButton
  to='/admin/productos/nuevo'
  onClick={(event) => {
    console.log('Vamos a crear un nuevo producto!', event)
  }}
>Crear Nuevo Producto</LinkButton>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    productos: state.productos.productos
  };
};

export default connect(
  mapStateToProp,
  { mostrarProductos }
)(Productos);
