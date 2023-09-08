import { cn } from "@utils/cn";

const ViewContainer: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => {
  return (
    <div className={cn("view-container", className)} {...props}>
      {children}
    </div>
  )
};

export default ViewContainer;