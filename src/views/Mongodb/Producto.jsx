import React, { Component } from "react";
import { connect } from "react-redux";
import { eliminarProducto } from "../../actions/productosActions";
import {withRouter} from "react-router-dom";

class Producto extends Component {

 
  state = {id: this.props.producto._id };

  

  eliminarCambios = () => {
    this.props.history.push("/admin/mongodb");
    //Guardar el producto
    console.log("eliminando el producto");
   
    console.log(this.state);
    this.setState({ id: this.props.producto._id });
    this.props.eliminarProducto(this.state);
   
   
    //this.props.history.push("/");
  };

  render() {
    const { producto } = this.props;
    return (
      <div>
         <li>
        <p>{producto.nombre}</p>
        <button onClick={this.eliminarCambios} className="btn btn-danger">Borrar</button>
      
      </li>
        
        </div>
     
    );
  }
  
}

/* const mapStateToProp = state => {
  return {
    productos: state.productos.productos
  };
};  */


export default connect(
  //mapStateToProp
  null,
  { eliminarProducto }
)(withRouter(Producto));
