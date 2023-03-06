//Node Modules
import MoonLoader from "react-spinners/MoonLoader";

export default function Loader() {
  return (
    <div className="loader flex-center">
      <MoonLoader
        color={"#FFBB00"}
        loading={true}
        size={50}
        aria-label="Ring Loader"
      />
    </div>
  );
}
