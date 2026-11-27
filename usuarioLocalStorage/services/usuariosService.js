import { guardarDatos,obtenerDatos } from "../storage/localStorage";


export const obtenerUsuarios=async ()=>
{
    return await obtenerDatos();
};
export const agregarUsuario= async (nombre,edad)=>
{
    const usuarios=await obtenerDatos();
    const nuevoUsuario={
        id:Date.now().toString(),
        nombre:nombre,
        edad:edad
    };
    usuarios.push(nuevoUsuario);
    await guardarDatos(usuarios);
};
export const actualizarUsuario=async(id,nombre,edad)=>
{
    const usuarios=await obtenerDatos();
    const nuevosUsuarios=usuarios.map(usuario=>usuario.id===id
        ?{...usuario,nombre,edad}
        :usuario
    );
    await guardarDatos(nuevosUsuarios); 
};
export const eliminarUsuario=async(id)=>
{
    const usuarios=await obtenerDatos();
    const nuevosUsuarios=usuarios.filter(usuario=>usuario.id!==id);
    await guardarDatos(nuevosUsuarios);

};