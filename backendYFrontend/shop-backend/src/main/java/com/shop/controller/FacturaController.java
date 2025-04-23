package com.shop.controller;

import com.shop.model.Factura;
import com.shop.service.FacturaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/facturas")
public class FacturaController {
    private final FacturaService facturaService;

    public FacturaController(FacturaService facturaService) {
        this.facturaService = facturaService;
    }

    @GetMapping
    public List<Factura> obtenerFacturas() {
        return facturaService.listarFacturas();
    }

    @PostMapping
    public Factura crearFactura(@RequestBody Factura factura) {
        return facturaService.guardarFactura(factura);
    }
}