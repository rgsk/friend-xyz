import { ITabItemIconProps } from "../TabItem";

const HomeIcon: React.FC<ITabItemIconProps> = ({ color }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_62)">
        <path
          d="M5.19995 12H3.19995L12.2 3L21.2 12H19.2"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.19995 12V19C5.19995 19.5304 5.41066 20.0391 5.78574 20.4142C6.16081 20.7893 6.66952 21 7.19995 21H17.2C17.7304 21 18.2391 20.7893 18.6142 20.4142C18.9892 20.0391 19.2 19.5304 19.2 19V12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.19995 21V15C9.19995 14.4696 9.41067 13.9609 9.78574 13.5858C10.1608 13.2107 10.6695 13 11.2 13H13.2C13.7304 13 14.2391 13.2107 14.6142 13.5858C14.9892 13.9609 15.2 14.4696 15.2 15V21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_62">
          <rect
            width="24"
            height="24"
            fill={color}
            transform="translate(0.199951)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeIcon;
