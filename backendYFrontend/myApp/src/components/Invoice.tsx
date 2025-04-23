import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButton } from '@ionic/react';

const Invoice: React.FC = () => {
  const [discount, setDiscount] = useState(0);
  const total = 30 - discount; 

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Factura</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Productos: $30</p>
        <IonInput placeholder="Código de descuento" onIonChange={(e) => setDiscount(5)} />
        <IonButton fill="outline">Aplicar</IonButton>
        <h3>Total: ${total}</h3>
      </IonCardContent>
    </IonCard>
  );
};

export default Invoice;