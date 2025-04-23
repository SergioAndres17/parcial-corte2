import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Dirección del backend

// Obtener todos los productos disponibles
export const getProductos = async () => {
  return axios.get(`${API_URL}/productos`);
};

// Crear un nuevo producto en el backend
export const crearProducto = async (producto: any) => {
  return axios.post(`${API_URL}/productos`, producto);
};

// Obtener todas las facturas registradas
export const getFacturas = async () => {
  return axios.get(`${API_URL}/facturas`);
};

// Crear una nueva factura en el backend con método de pago
export const crearFactura = async (productoId: number, precio: number, metodoPago: string) => {
  const nuevaFactura = {
    producto_id: productoId,
    fechaCompra: new Date().toISOString(),
    totalPago: precio,
    metodoPago: metodoPago // ✅ Se agrega el método de pago en la solicitud
  };

  return axios.post(`${API_URL}/facturas`, nuevaFactura);
};