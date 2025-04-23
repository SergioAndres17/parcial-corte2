import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import ProductList from '../components/ProductList';
import Invoice from '../components/Invoice';
import PaymentMethods from '../components/PaymentMethods';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Parqueadero App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Bienvenido</h2>
        <ProductList />
        <Invoice />
        <PaymentMethods />
        <IonButton expand="full" color="primary">
          Finalizar Compra
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;