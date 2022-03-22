export const getData = async() => {
  const url = `http://scratchya.com.ar/react/datos.php`;
  const resp = await fetch( url );
  const datos = await resp.json();

  const data = datos.map( tabla => {
    return {
      codigo: tabla.codigo,
      descripcion: tabla.descripcion,
      precio: tabla.precio
    }
  });

  return data;
}
