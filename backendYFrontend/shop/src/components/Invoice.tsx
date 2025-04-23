import React, { useEffect, useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { getFacturas } from '../services/api';

const Invoice: React.FC = () => {
  const [facturas, setFacturas] = useState<any[]>([]);

  useEffect(() => {
    getFacturas().then(response => setFacturas(response.data));
  }, []);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Factura de Compra</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {facturas.map((factura) => (
          <p key={factura.id}>Producto: {factura.producto.nombre} | Total: ${factura.totalPago}</p>
        ))}
      </IonCardContent>
      <IonButton expand="full" color="tertiary">Confirmar Compra</IonButton>
    </IonCard>
  );
};

export default Invoice;