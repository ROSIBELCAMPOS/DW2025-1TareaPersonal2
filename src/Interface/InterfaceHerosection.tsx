export interface InterfaceHerosection{
    nombre: string;
    etiqueta: string;
    imagen:  string;
    email:  string;
    resumen: string;
    perfiles: {
      red:  string;
      usuario: string;
      url: string
    }[];
    
}