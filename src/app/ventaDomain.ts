import { ventaDetalle } from "./ventaDetalleDomain";

export class VentaModel{

    constructor(public id_venta: any,
        public total:any,
        public fecha:any,
        public serie:any,
        public numero :any,
        public detalleVentasSet :ventaDetalle[],
        public cliente:any,
        public vendedor:any,
        public activo:any
    ){}
}