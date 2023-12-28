import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategory, fetchGender } from "../../features/goodsSlice.js";
import { setActiveGender } from "../../features/navigationSlice.js";
import { Goods } from "../Goods/Goods.jsx";

export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }

    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [category, dispatch, gender]);

  return (
    <>
      <div></div>
      <Goods category={category} />
    </>
  );
};