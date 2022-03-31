import React, { useEffect, useState } from 'react'

function TablaApp (){
  
  const [ data, setData ] = useState([]);
  const url = `http://scratchya.com.ar/react/datos.php`;
  const getData = async () =>{
    const resp = await fetch( url );
    const datos = await resp.json();
    setData(datos);
  };
  useEffect(()=>{
    getData()
  }, [])

  return (
    <div>
      <h2>TablaApp</h2>
      <table className='tabla'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>precio</th>
            <th>Borra?</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(dat => (
              <>
                <tr key={dat.codigo}>
                  <td>{dat.codigo}</td>
                  <td>{dat.descripcion}</td>
                  <td>{dat.precio}</td>
                  <td><button onClick={() =>{
                        var datas = data.filter((item) => item.codigo !== dat.codigo);
                        var newData = [];
                        Object.assign(newData, datas);
                        setData(newData);
                        //console.log(newData);
                  }}>Borrar</button></td>
                </tr>
              </>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
export default TablaApp;
