import { ProductoDomain } from "../productoDomain";

export class ventaDetalle{
constructor(
    public id_detalle:any,
    public cantidad :any,
    public precio : any,
    public total :any,
    public productos : ProductoDomain,
    public activo :any
    
){   

}

}