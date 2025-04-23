import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import ProductList from '../components/ProductList';
import Invoice from '../components/Invoice';
import PaymentMethods from '../components/PaymentMethods';

const Home: React.FC = () => {
  const [metodoPago, setMetodoPago] = useState<string>(""); // ✅ Guarda el método de pago seleccionado

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shop</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Bienvenido a Shop</h2>

        {/* Método de pago seleccionado */}
        <PaymentMethods onSelectPayment={(metodo) => setMetodoPago(metodo)} />

        {/* Ahora ProductList recibe el método de pago */}
        <ProductList metodoPago={metodoPago} />

        <Invoice />

        {/* Botón para ver registros de compras */}
        <IonButton expand="full" routerLink="/compras" color="tertiary">
          Ver Registros de Compras
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;