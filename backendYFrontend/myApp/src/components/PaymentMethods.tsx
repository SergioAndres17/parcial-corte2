import React, { useState } from 'react';
import { IonButton, IonList, IonItem, IonInput, IonAlert } from '@ionic/react';

const PaymentMethods: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <IonList>
        <IonItem>
          <IonInput placeholder="Número de tarjeta"></IonInput>
          <IonButton expand="full" color="success" onClick={() => setShowAlert(true)}>Pagar con Tarjeta</IonButton>
        </IonItem>
        <IonItem>
          <IonButton expand="full" color="secondary" onClick={() => setShowAlert(true)}>Pagar con PayPal</IonButton>
        </IonItem>
      </IonList>
      <IonAlert isOpen={showAlert} header="Pago Confirmado" message="Tu compra ha sido procesada con éxito." buttons={['OK']} />
    </>
  );
};

export default PaymentMethods;