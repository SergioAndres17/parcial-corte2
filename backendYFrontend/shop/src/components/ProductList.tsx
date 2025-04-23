import React, { useEffect, useState } from 'react';
import { IonList, IonItem, IonLabel, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import { getProductos, crearFactura } from '../services/api';

interface ProductListProps {
  metodoPago: string; // ✅ Se recibe el método de pago desde Home.tsx
}

const ProductList: React.FC<ProductListProps> = ({ metodoPago }) => {
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    getProductos().then(response => setProductos(response.data));
  }, []);

  const agregarAFactura = async (producto: any) => {
    if (!metodoPago) {
      alert("Selecciona un método de pago antes de agregar productos.");
      return;
    }

    try {
      await crearFactura(producto.id, producto.precio, metodoPago);
      alert(`Producto "${producto.nombre}" agregado a la factura con método de pago "${metodoPago}".`);
    } catch (error) {
      console.error("Error al agregar a la factura:", error);
      alert("Hubo un problema al registrar la compra.");
    }
  };

  return (
    <IonGrid>
      <IonRow>
        {productos.map((producto) => (
          <IonCol size="6" key={producto.id}>
            <IonItem>
              <IonLabel>
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <strong>${producto.precio}</strong>
              </IonLabel>
              <IonButton fill="solid" color="success" onClick={() => agregarAFactura(producto)}>
                Agregar
              </IonButton>
            </IonItem>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default ProductList;