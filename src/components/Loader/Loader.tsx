import { FallingLines } from "react-loader-spinner";

interface LoaderProps {
  color?: string;
  width?: string | number;
  visible?: boolean;
  ariaLabel?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  color = "#3289a8",
  width = "100",
  visible = true,
  ariaLabel = "falling-circles-loading",
}) => {
  return (
    <div>
      <FallingLines
        color={color}
        width={width}
        visible={visible}
        ariaLabel={ariaLabel}
      />
    </div>
  );
};
