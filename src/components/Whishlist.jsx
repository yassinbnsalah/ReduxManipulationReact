import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteitemFromWishlist, selectedwishlist } from '../redux/wishlistSlice'

function Whishlist() {
  const [wishlist] = useSelector(selectedwishlist);
  const dispatch = useDispatch();
  const removeItem = (item) =>{
    console.log(item);
    dispatch(deleteitemFromWishlist(item))
  }
  return (
    <div>
      {wishlist?.map((item , index) => (
        <>{item.title} <button type="button" onClick={()=> removeItem(item)}>Remove </button><br/></>
      ))}
    </div>
  )
}

export default Whishlist
