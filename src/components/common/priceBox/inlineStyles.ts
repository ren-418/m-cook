import { cva } from 'class-variance-authority';


const inlineStyles = cva(
  'flex gap-1',
  {
    variants: {
      inline: { true: 'flex-row items-align-center justify-start', false: 'flex-col' },
    }
  }
)

export { inlineStyles };
