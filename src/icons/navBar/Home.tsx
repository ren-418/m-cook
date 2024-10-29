import { IconNavBarProps } from "./iconNavBar";


export default function Home({ isFilled = false }: IconNavBarProps) {
  return (
    <>
      {isFilled ? (
        <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.75 12.4932C9.3693 12.4932 8.25 13.6125 8.25 14.9932V19.9932H13.25V14.9932C13.25 13.6125 12.1307 12.4932 10.75 12.4932Z" fill="#17A68E" />
          <path d="M14.9167 14.9934V19.9934H18.25C19.6307 19.9934 20.75 18.8741 20.75 17.4934V9.89259C20.7502 9.45966 20.582 9.04364 20.2808 8.73259L13.1992 1.07673C11.9496 -0.275227 9.84074 -0.358234 8.48879 0.891297C8.42457 0.950672 8.3627 1.01251 8.30336 1.07673L1.23418 8.73009C0.923945 9.04243 0.749883 9.46485 0.75 9.90509V17.4934C0.75 18.8741 1.8693 19.9934 3.25 19.9934H6.58332V14.9934C6.59891 12.7211 8.43355 10.8654 10.6487 10.812C12.9379 10.7568 14.8992 12.644 14.9167 14.9934Z" fill="#17A68E" />
          <path d="M10.75 12.4932C9.3693 12.4932 8.25 13.6125 8.25 14.9932V19.9932H13.25V14.9932C13.25 13.6125 12.1307 12.4932 10.75 12.4932Z" fill="#17A68E" />
        </svg>
      )
        : (
          <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_551_1636)">
              <path d="M20.0175 7.55751L13.6967 1.23584C12.9144 0.455835 11.8547 0.0178223 10.75 0.0178223C9.64529 0.0178223 8.58564 0.455835 7.80334 1.23584L1.48251 7.55751C1.24953 7.789 1.06482 8.06443 0.939079 8.36783C0.813339 8.67124 0.749075 8.99658 0.75001 9.32501V17.5058C0.75001 18.1689 1.0134 18.8048 1.48224 19.2736C1.95108 19.7425 2.58697 20.0058 3.25001 20.0058H18.25C18.9131 20.0058 19.5489 19.7425 20.0178 19.2736C20.4866 18.8048 20.75 18.1689 20.75 17.5058V9.32501C20.7509 8.99658 20.6867 8.67124 20.5609 8.36783C20.4352 8.06443 20.2505 7.789 20.0175 7.55751V7.55751ZM13.25 18.3392H8.25001V15.0608C8.25001 14.3978 8.5134 13.7619 8.98224 13.2931C9.45109 12.8242 10.087 12.5608 10.75 12.5608C11.4131 12.5608 12.0489 12.8242 12.5178 13.2931C12.9866 13.7619 13.25 14.3978 13.25 15.0608V18.3392ZM19.0833 17.5058C19.0833 17.7269 18.9955 17.9388 18.8393 18.0951C18.683 18.2514 18.471 18.3392 18.25 18.3392H14.9167V15.0608C14.9167 13.9558 14.4777 12.896 13.6963 12.1146C12.9149 11.3332 11.8551 10.8942 10.75 10.8942C9.64494 10.8942 8.58513 11.3332 7.80373 12.1146C7.02233 12.896 6.58334 13.9558 6.58334 15.0608V18.3392H3.25001C3.029 18.3392 2.81704 18.2514 2.66075 18.0951C2.50447 17.9388 2.41668 17.7269 2.41668 17.5058V9.32501C2.41745 9.10416 2.50517 8.8925 2.66084 8.73584L8.98168 2.41668C9.45143 1.94912 10.0872 1.68663 10.75 1.68663C11.4128 1.68663 12.0486 1.94912 12.5183 2.41668L18.8392 8.73834C18.9942 8.89438 19.0819 9.10503 19.0833 9.32501V17.5058Z" fill="#222425" />
            </g>
            <defs>
              <clipPath id="clip0_551_1636">
                <rect width="20" height="20" fill="white" transform="translate(0.75)" />
              </clipPath>
            </defs>
          </svg>
        )
      }
    </>
  );

}
