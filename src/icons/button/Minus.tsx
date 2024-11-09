import { IconButtonProps } from './IconButton'

export default function Minus({ className = '', ...props }: IconButtonProps) {
  return (
    <svg width="19" onClick={props.onClick} className={className} height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 8.75H6C5.58579 8.75 5.25 9.08579 5.25 9.5C5.25 9.91422 5.58579 10.25 6 10.25H13.5C13.9142 10.25 14.25 9.91422 14.25 9.5C14.25 9.08579 13.9142 8.75 13.5 8.75Z" fill="#222425" />
    </svg>
  )
};
