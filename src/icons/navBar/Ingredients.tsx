import { IconNavBarProps } from "./iconNavBar";

export default function Ingredients({ isFilled = false }: IconNavBarProps) {
  return (
    <>
      {isFilled ? (
        <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_551_1279)">
            <path d="M20.25 7.5C20.25 6.83696 19.9866 6.20107 19.5178 5.73223C19.0489 5.26339 18.413 5 17.75 5H15.25C15.25 3.67392 14.7232 2.40215 13.7855 1.46447C12.8479 0.526784 11.5761 0 10.25 0C8.92392 0 7.65215 0.526784 6.71447 1.46447C5.77678 2.40215 5.25 3.67392 5.25 5H2.75C2.08696 5 1.45107 5.26339 0.982233 5.73223C0.513392 6.20107 0.25 6.83696 0.25 7.5L0.25 15.8333C0.251323 16.938 0.690735 17.997 1.47185 18.7782C2.25296 19.5593 3.312 19.9987 4.41667 20H16.0833C17.188 19.9987 18.247 19.5593 19.0282 18.7782C19.8093 17.997 20.2487 16.938 20.25 15.8333V7.5ZM6.91667 5C6.91667 4.11594 7.26786 3.2681 7.89298 2.64298C8.5181 2.01786 9.36594 1.66667 10.25 1.66667C11.1341 1.66667 11.9819 2.01786 12.607 2.64298C13.2321 3.2681 13.5833 4.11594 13.5833 5H6.91667Z" fill="#17A68E" />
          </g>
          <defs>
            <clipPath id="clip0_551_1279">
              <rect width="20" height="20" fill="white" transform="translate(0.25)" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_551_1565)">
            <path d="M17.75 5H15.25C15.25 3.67392 14.7232 2.40215 13.7855 1.46447C12.8479 0.526784 11.5761 0 10.25 0C8.92392 0 7.65215 0.526784 6.71447 1.46447C5.77678 2.40215 5.25 3.67392 5.25 5H2.75C2.08696 5 1.45107 5.26339 0.982233 5.73223C0.513392 6.20107 0.25 6.83696 0.25 7.5L0.25 15.8333C0.251323 16.938 0.690735 17.997 1.47185 18.7782C2.25296 19.5593 3.312 19.9987 4.41667 20H16.0833C17.188 19.9987 18.247 19.5593 19.0282 18.7782C19.8093 17.997 20.2487 16.938 20.25 15.8333V7.5C20.25 6.83696 19.9866 6.20107 19.5178 5.73223C19.0489 5.26339 18.413 5 17.75 5ZM10.25 1.66667C11.1341 1.66667 11.9819 2.01786 12.607 2.64298C13.2321 3.2681 13.5833 4.11594 13.5833 5H6.91667C6.91667 4.11594 7.26786 3.2681 7.89298 2.64298C8.5181 2.01786 9.36594 1.66667 10.25 1.66667V1.66667ZM18.5833 15.8333C18.5833 16.4964 18.3199 17.1323 17.8511 17.6011C17.3823 18.0699 16.7464 18.3333 16.0833 18.3333H4.41667C3.75363 18.3333 3.11774 18.0699 2.6489 17.6011C2.18006 17.1323 1.91667 16.4964 1.91667 15.8333V7.5C1.91667 7.27899 2.00446 7.06702 2.16074 6.91074C2.31702 6.75446 2.52899 6.66667 2.75 6.66667H5.25V8.33333C5.25 8.55435 5.3378 8.76631 5.49408 8.92259C5.65036 9.07887 5.86232 9.16667 6.08333 9.16667C6.30435 9.16667 6.51631 9.07887 6.67259 8.92259C6.82887 8.76631 6.91667 8.55435 6.91667 8.33333V6.66667H13.5833V8.33333C13.5833 8.55435 13.6711 8.76631 13.8274 8.92259C13.9837 9.07887 14.1957 9.16667 14.4167 9.16667C14.6377 9.16667 14.8496 9.07887 15.0059 8.92259C15.1622 8.76631 15.25 8.55435 15.25 8.33333V6.66667H17.75C17.971 6.66667 18.183 6.75446 18.3393 6.91074C18.4955 7.06702 18.5833 7.27899 18.5833 7.5V15.8333Z" fill="#222425" />
          </g>
          <defs>
            <clipPath id="clip0_551_1565">
              <rect width="20" height="20" fill="white" transform="translate(0.25)" />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  )
}

