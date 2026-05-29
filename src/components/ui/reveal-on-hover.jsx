import * as React from "react";
import { cn } from "@/lib/utils";

const CardHoverRevealContext = React.createContext(null);

function useCardHoverRevealContext() {
  const context = React.useContext(CardHoverRevealContext);
  if (!context) {
    throw new Error("useCardHoverRevealContext must be used within CardHoverReveal");
  }
  return context;
}

const CardHoverReveal = React.forwardRef(({ className, ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <CardHoverRevealContext.Provider value={{ isHovered, setIsHovered }}>
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        {...props}
      />
    </CardHoverRevealContext.Provider>
  );
});
CardHoverReveal.displayName = "CardHoverReveal";

const CardHoverRevealMain = React.forwardRef(
  ({ className, initialScale = 1, hoverScale = 1.05, style, ...props }, ref) => {
    const { isHovered } = useCardHoverRevealContext();
    return (
      <div
        ref={ref}
        className={cn("size-full transition-transform duration-300", className)}
        style={{
          transform: `scale(${isHovered ? hoverScale : initialScale})`,
          ...style,
        }}
        {...props}
      />
    );
  }
);
CardHoverRevealMain.displayName = "CardHoverRevealMain";

const CardHoverRevealContent = React.forwardRef(({ className, style, ...props }, ref) => {
  const { isHovered } = useCardHoverRevealContext();
  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-[auto_1rem_1rem] p-4 backdrop-blur-lg transition-all duration-500 ease-in-out sm:inset-[auto_1.5rem_1.5rem] sm:p-6",
        className
      )}
      style={{
        translate: isHovered ? "0%" : "0% 120%",
        opacity: isHovered ? 1 : 0,
        ...style,
      }}
      {...props}
    />
  );
});
CardHoverRevealContent.displayName = "CardHoverRevealContent";

export { CardHoverReveal, CardHoverRevealMain, CardHoverRevealContent };
