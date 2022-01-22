import spinner from "../assets/loading.svg";

export const LoadSpinner = () => {
  return (
    <img
      src={spinner}
      alt="Loading spinner"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24"
    />
  );
};
