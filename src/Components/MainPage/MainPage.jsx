import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategory, fetchGender } from "../../features/goodsSlice.js";
import { setActiveGender } from "../../features/navigationSlice.js";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams.js";
import { Banner } from "../Banner/Banner.jsx";
import { Goods } from "../Goods/Goods.jsx";

export const MainPage = () => {
  const dispatch = useDispatch();
  const { gender, category } = useParams();
  const { activeGender, categories, genderList } = useSelector(state => state.navigation);
  const genderData = categories[activeGender];
  const categoryData = genderData?.list.find(item => item.slug === category);
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (gender) {
      dispatch(setActiveGender(gender));
    } else if (genderList[0]) {
      dispatch(setActiveGender(genderList[0]));
      dispatch(fetchGender(genderList[0]));
    }
  }, [gender, genderList, dispatch]);

  useEffect(() => {
    if (gender && category) {
      const params = { gender, category };
      if (page) {
        params.page = page;
      } else {
        params.page = 1;
      }
      dispatch(fetchCategory(params));
      return;
    }

    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [category, gender, page, dispatch]);

  return (
    <>
      {!category && <Banner data={genderData?.banner} />}
      <Goods title={categoryData?.title}
      />
    </>
  );
};