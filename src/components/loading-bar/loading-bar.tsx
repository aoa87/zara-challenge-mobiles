const LoadingBar = () => {
  return (
    <div className="relative w-full h-[1px] overflow-hidden">
      <div className="absolute left-0 top-0 h-[1px] bg-black loading-bar" />
    </div>
  );
};

export default LoadingBar;
