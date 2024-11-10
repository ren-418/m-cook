export default function BackArrow({ className = '' }: { className: string }) {
  return (
    <svg width="46" className={className} height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dd_399_4258)">
        <circle cx="23" cy="23" r="18" fill="white" />
      </g>
      <path d="M19.1451 23.6023C19.0162 23.4745 18.914 23.3224 18.8441 23.1549C18.7743 22.9873 18.7384 22.8076 18.7384 22.6261C18.7384 22.4446 18.7743 22.2649 18.8441 22.0973C18.914 21.9297 19.0162 21.7777 19.1451 21.6498L25.4564 15.3523C25.5852 15.2245 25.6875 15.0724 25.7573 14.9049C25.8272 14.7373 25.8631 14.5576 25.8631 14.3761C25.8631 14.1946 25.8272 14.0149 25.7573 13.8473C25.6875 13.6797 25.5852 13.5277 25.4564 13.3998C25.1987 13.1437 24.8503 13 24.487 13C24.1237 13 23.7752 13.1437 23.5176 13.3998L17.2064 19.7111C16.4339 20.4845 16 21.533 16 22.6261C16 23.7192 16.4339 24.7676 17.2064 25.5411L23.5176 31.8523C23.7737 32.1064 24.1194 32.2496 24.4801 32.2511C24.6611 32.2521 24.8405 32.2175 25.008 32.149C25.1755 32.0806 25.3279 31.9798 25.4564 31.8523C25.5852 31.7245 25.6875 31.5724 25.7573 31.4049C25.8272 31.2373 25.8631 31.0576 25.8631 30.8761C25.8631 30.6946 25.8272 30.5149 25.7573 30.3473C25.6875 30.1797 25.5852 30.0277 25.4564 29.8998L19.1451 23.6023Z" fill="#222425" />
      <defs>
        <filter id="filter0_dd_399_4258" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_399_4258" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_399_4258" />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_399_4258" result="effect2_dropShadow_399_4258" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_399_4258" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}
