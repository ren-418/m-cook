import { Meta, StoryFn } from '@storybook/react';
import ImageCarrousel, { ImageCarrouselProps } from './ImageCarrousel';


const Template: StoryFn<ImageCarrouselProps> = (args) => (
  <div style={{ width: '390px', height: '184px' }}>
    <ImageCarrousel {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  images: [
    "https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  ],
};


export default {
  title: 'UI/Header/ImageCarrousel',
  component: ImageCarrousel,
  parameters: {
    layout: 'centered',
  }
} as Meta;
