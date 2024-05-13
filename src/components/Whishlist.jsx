import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GHADA0REACT, deleteitemFromWishlist, selectedwishlist } from '../redux/wishlistSlice'

function Whishlist() {
  const [wishlist] = useSelector(selectedwishlist);
  const dispatch = useDispatch();
  const removeItem = (item) =>{
    dispatch(deleteitemFromWishlist(item))
  }

  const nadhefIlWish = () =>{
    dispatch(GHADA0REACT())
  }
  return (
    <div>
      {wishlist?.map((item , index) => (
        <>{item.title} <button type="button" onClick={()=> removeItem(item)}>Remove </button><br/></>
      ))}

      <button type='button' onClick={nadhefIlWish}>Clear Wish </button>
    </div>
  )
}

export default Whishlist
