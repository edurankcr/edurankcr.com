import { Image } from '@/components';

type MainBackgroundProps = {
  value?: number;
  type?: 'static' | 'images';
};

const MainBackground = (props: MainBackgroundProps) => {
  const { type = 'images', value = 1 } = props;

  if (type === 'static') {
    return <div className="absolute inset-0 overflow-hidden bg-background-secondary" />;
  }

  return (
    <picture className="absolute inset-0 overflow-hidden">
      <source
        media="(max-width: 767.95px)"
        srcSet={`/assets/images/form/${value}-sm.jpg`}
        type="image/jpg"
      />
      <Image
        key={value}
        loading="eager"
        src={`/assets/images/form/${value}.jpg`}
        alt="Background"
        className="size-full object-cover"
      />
    </picture>
  );
};

export { MainBackground };
