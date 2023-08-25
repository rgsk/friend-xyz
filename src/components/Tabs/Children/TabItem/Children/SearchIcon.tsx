import { ITabItemIconProps } from "../TabItem";

const SearchIcon: React.FC<ITabItemIconProps> = ({ color }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.20001 10C3.20001 10.9193 3.38107 11.8295 3.73286 12.6788C4.08464 13.5281 4.60025 14.2997 5.25026 14.9497C5.90027 15.5998 6.67195 16.1154 7.52123 16.4672C8.37051 16.8189 9.28076 17 10.2 17C11.1193 17 12.0295 16.8189 12.8788 16.4672C13.7281 16.1154 14.4997 15.5998 15.1498 14.9497C15.7998 14.2997 16.3154 13.5281 16.6672 12.6788C17.019 11.8295 17.2 10.9193 17.2 10C17.2 9.08075 17.019 8.1705 16.6672 7.32122C16.3154 6.47194 15.7998 5.70026 15.1498 5.05025C14.4997 4.40024 13.7281 3.88463 12.8788 3.53284C12.0295 3.18106 11.1193 3 10.2 3C9.28076 3 8.37051 3.18106 7.52123 3.53284C6.67195 3.88463 5.90027 4.40024 5.25026 5.05025C4.60025 5.70026 4.08464 6.47194 3.73286 7.32122C3.38107 8.1705 3.20001 9.08075 3.20001 10Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.2 21L15.2 15"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default SearchIcon;