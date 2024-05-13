import { createSlice } from "@reduxjs/toolkit";
import { getAllMovies } from "../service/crud";
let initialState = {
  wishlist: [],
  selectedwishlist: {},
  errors: "",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    populatewishlist(state, action) {
      state.wishlist = action.payload;
    },
    selectwishlist(state, action) {
      state.selectedwishlist = action.payload;
    },
    unselectwishlist(state) {
      state.selectedwishlist = null;
    },
    clearWish : (state) =>{
      state.wishlist =[]
    }
    ,
    deletewishlistReducer: (state, action) => {
      const payload = action.payload;
      state.wishlist = state.wishlist.filter(
        (wishlistItem) => wishlistItem.id !== payload.id
      );
      console.log(state.wishlist);
    },
    updatewishlistReducer: (state, action) => {
      const payload = action.payload;
      const index = state.wishlist.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.wishlist[index] = payload;
      }
    },
    addwishlistReducer: (state, action) => {
      const payload = action.payload;
      const index = state.wishlist.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        alert("Wishlist already added");
      }else{
        state.wishlist.push(payload);
      }
      
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const fetchwishlist = () => async (dispatch) => {
  try {
    const wishlistResult = await getAllMovies();
    dispatch(populatewishlist(wishlistResult.data));
    dispatch(setErrors(null));
  } catch (error) {
    dispatch(setErrors(error));
  }
};
export const addItemToWishlist = (state) => async (dispatch) => {
  try {
    dispatch(addwishlistReducer(state));
  } catch (error) {
    dispatch(setErrors(error));
  }
};

export const GHADA0REACT = (state) => async (dispatch) => {
  try {
    dispatch(clearWish(state));
  } catch (error) {
    dispatch(setErrors(error));
  }
}

export const deleteitemFromWishlist = (state) => async (dispatch) => {
  try {
    dispatch(deletewishlistReducer(state));
  } catch (error) {
    dispatch(setErrors(error));
  }
}
export const selectedwishlist = (state) => {
  return [state.wishlist.wishlist, state.errors];
};

export const {
  populatewishlist,
  selectwishlist,
  unselectwishlist,
  setErrors,
  clearWish,
  deletewishlistReducer,
  updatewishlistReducer,
  addwishlistReducer,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
