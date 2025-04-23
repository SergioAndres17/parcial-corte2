import React, { useState } from 'react';
import { IonList, IonItem, IonLabel, IonButton } from '@ionic/react';

interface PaymentMethodsProps {
  onSelectPayment: (metodo: string) => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ onSelectPayment }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  const selectMethod = (method: string) => {
    setSelectedMethod(method);
    onSelectPayment(method); // ✅ Se envía el método de pago al padre (Home.tsx)
  };

  return (
    <IonList>
      <IonItem>
        <IonLabel>Selecciona un método de pago:</IonLabel>
      </IonItem>
      <IonItem>
        <IonButton color={selectedMethod === "Tarjeta" ? "primary" : "light"} onClick={() => selectMethod("Tarjeta")}>
          Tarjeta de Crédito
        </IonButton>
      </IonItem>
      <IonItem>
        <IonButton color={selectedMethod === "PayPal" ? "primary" : "light"} onClick={() => selectMethod("PayPal")}>
          PayPal
        </IonButton>
      </IonItem>
      <IonItem>
        <IonButton color={selectedMethod === "Efectivo" ? "primary" : "light"} onClick={() => selectMethod("Efectivo")}>
          Efectivo
        </IonButton>
      </IonItem>
    </IonList>
  );
};

export default PaymentMethods;