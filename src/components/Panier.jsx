import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GHADA0REACT, deleteitemFromData, selectedData } from '../redux/dataSlice'

function Panier() {
    //affichage par default  => useSelector 
    const [Data] = useSelector(selectedData); 
    // manipulation lors d'un event dispatch 
    const dispatch = useDispatch();
    const RemoveItemFormData = (item) =>{
        dispatch(deleteitemFromData(item))
    }

    const ClearData = ()=>{
        dispatch(GHADA0REACT())
    }
  return (
    <div>
      {Data?.map((item,index) => (
        <> panier title : {item.title} <button type='button' onClick={() => RemoveItemFormData(item)}> Remove Item </button> <br/></> 
      ))}

      <button type="button" onClick={ClearData}>Clear Panier</button>
    </div>
  )
}

export default Panier
