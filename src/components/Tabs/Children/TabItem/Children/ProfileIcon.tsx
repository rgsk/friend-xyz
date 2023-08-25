import { ITabItemIconProps } from "../TabItem";

const ProfileIcon: React.FC<ITabItemIconProps> = ({ color }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_71)">
        <path
          d="M3.3999 13C3.3999 14.2607 3.64821 15.5091 4.13066 16.6738C4.6131 17.8385 5.32023 18.8968 6.21168 19.7882C7.10312 20.6797 8.16142 21.3868 9.32614 21.8693C10.4909 22.3517 11.7392 22.6 12.9999 22.6C14.2606 22.6 15.5089 22.3517 16.6737 21.8693C17.8384 21.3868 18.8967 20.6797 19.7881 19.7882C20.6796 18.8968 21.3867 17.8385 21.8691 16.6738C22.3516 15.5091 22.5999 14.2607 22.5999 13C22.5999 11.7393 22.3516 10.491 21.8691 9.32626C21.3867 8.16154 20.6796 7.10324 19.7881 6.2118C18.8967 5.32036 17.8384 4.61323 16.6737 4.13078C15.5089 3.64834 14.2606 3.40002 12.9999 3.40002C11.7392 3.40002 10.4909 3.64834 9.32614 4.13078C8.16142 4.61323 7.10312 5.32036 6.21168 6.2118C5.32023 7.10324 4.6131 8.16154 4.13066 9.32626C3.64821 10.491 3.3999 11.7393 3.3999 13Z"
          stroke={color}
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.79993 10.8667C9.79993 11.7154 10.1371 12.5293 10.7372 13.1294C11.3373 13.7295 12.1512 14.0667 12.9999 14.0667C13.8486 14.0667 14.6626 13.7295 15.2627 13.1294C15.8628 12.5293 16.1999 11.7154 16.1999 10.8667C16.1999 10.018 15.8628 9.20406 15.2627 8.60395C14.6626 8.00383 13.8486 7.66669 12.9999 7.66669C12.1512 7.66669 11.3373 8.00383 10.7372 8.60395C10.1371 9.20406 9.79993 10.018 9.79993 10.8667Z"
          stroke={color}
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.77917 20.3056C7.04318 19.4269 7.58341 18.6568 8.3197 18.1093C9.056 17.5619 9.94914 17.2664 10.8666 17.2667H15.1333C16.052 17.2664 16.9462 17.5626 17.6831 18.1113C18.4199 18.6599 18.9599 19.4318 19.2229 20.312"
          stroke={color}
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_71">
          <rect
            width="25.6"
            height="25.6"
            fill={color}
            transform="translate(0.199951 0.200012)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ProfileIcon;