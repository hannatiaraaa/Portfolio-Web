import type { TSocialMedia } from 'configs/SocialMedia';
import SocialMedia from 'components/SocialMedia';

type Props = {
  data: TSocialMedia[];
};

export const SocialMediaList = ({ data }: Props) => {
  return (
    <div className='gap-1 flex self-center px-2'>
      {data.map((item) => (
        <SocialMedia
          key={item.name}
          {...item}
        />
      ))}
    </div>
  );
};
