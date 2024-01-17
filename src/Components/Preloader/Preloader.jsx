import { InfinitySpin } from "react-loader-spinner";

const style = {
  display: 'flex',
  justifyContent: 'center',
  padding: '100px 0',
};

export const Preloader = () => (
  <div style={style}>
    <InfinitySpin
      visible={true}
      width="200"
      color="#000000"
      ariaLabel="infinity-spin-loading"
    />
  </div>
);