"use client";

const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="relative overflow-x-auto whitespace-nowrap cursor-grab active:cursor-grabbing 
      [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-[#CCCCCC] 
      [&::-webkit-scrollbar-thumb]:bg-black"
      onMouseDown={(e) => {
        const target = e.currentTarget;
        const startX = e.pageX - target.offsetLeft;
        const scrollLeft = target.scrollLeft;
        let isDragging = false;

        const onMouseMove = (event: MouseEvent) => {
          isDragging = true;
          event.preventDefault();
          const x = event.pageX - target.offsetLeft;
          const walk = (x - startX) * 1.5;
          target.scrollLeft = scrollLeft - walk;
        };

        const onMouseUp = () => {
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
          if (!isDragging) {
            return;
          }
          isDragging = false;
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      }}
    >
      <div className="inline-flex py-4">{children}</div>
    </div>
  );
};

export default Carousel;
