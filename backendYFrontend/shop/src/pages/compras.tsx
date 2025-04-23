import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { getFacturas } from '../services/api';

const Compras: React.FC = () => {
  const [facturas, setFacturas] = useState<any[]>([]);

  useEffect(() => {
    getFacturas().then(response => setFacturas(response.data));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registros de Compras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {facturas.map((factura) => (
            <IonItem key={factura.id}>
              <IonLabel>
                <h2>Producto: {factura.producto.nombre}</h2>
                <p>Fecha: {factura.fechaCompra}</p>
                <strong>Total: ${factura.totalPago}</strong>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonButton expand="full" routerLink="/home" color="primary">
          Volver al Inicio
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Compras;