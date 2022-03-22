import { useEffect, useState } from 'react'
import { getData } from './getData';

export const useFetchData = () => {
    const [state, setState] = useState({
        data: []
    });         

    useEffect(() => {
        getData()
        .then(datas => {
            console.log(datas)
            setState({
                data: datas
            })
        });
      }, []);
      return state;
}
