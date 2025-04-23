package com.shop.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "facturas")
public class Factura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "producto_id") // ✅ Corregido: se usa @JoinColumn para relaciones ManyToOne
    private Producto producto;

    @Column(name = "fecha_compra")
    private LocalDateTime fechaCompra;

    @Column(name = "total_pago")
    private Double totalPago;

    @Column(name = "metodo_pago", nullable = false) // ✅ Se guarda el método de pago
    private String metodoPago;
}

