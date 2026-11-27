const CLAVE= 'usuarios';
export const guardarDatos=async(datos)=>
{
    localStorage.setItem(CLAVE,JSON.stringify(datos));
};

export const obtenerDatos=async()=>
{
   const datos= localStorage.getItem(CLAVE);
   return datos? JSON.parse(datos):[];
}
export const eliminarDatos=async()=>
{
    localStorage.removeItem(CLAVE);
}