import React from 'react'
import { getData } from './helper/getData'
import { useFetchData } from './helper/useFetchData';

export const TablaApp = () => {
  getData();
  const { data } = useFetchData();
  console.log(data);
  return (
    
    <>
      <h2>TablaApp</h2>
      <table className='tabla'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>precio</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(dat => (
              <>
                <tr>
                  <td>{dat.codigo}</td>
                  <td>{dat.descripcion}</td>
                  <td>{dat.precio}</td>
                </tr>
              </>
            ))
          }
        </tbody>
      </table>
    </>

  )
}
