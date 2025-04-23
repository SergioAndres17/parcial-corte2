import React from 'react';
import { IonList, IonItem, IonLabel, IonThumbnail, IonImg, IonButton } from '@ionic/react';

const ProductList: React.FC = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: 10, image: '/public/pera.jpg' },
    { id: 2, name: 'Producto 2', price: 20, image: '/public/manzana.avif' },
  ];

  return (
    <IonList>
      {products.map((product) => (
        <IonItem key={product.id}>
          <IonThumbnail slot="start">
            <IonImg src={product.image} />
          </IonThumbnail>
          <IonLabel>{product.name} - ${product.price}</IonLabel>
          <IonButton fill="outline">Agregar</IonButton>
        </IonItem>
      ))}
    </IonList>
  );
};

export default ProductList;