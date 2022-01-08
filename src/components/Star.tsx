import ReactStars from 'react-stars';

type Props = {
  value: number;
  size: number;
};

const Star = ({ value, size }: Props) => {
  return <ReactStars value={value} color1='#BBBBBB' color2='#F4B14C' size={size} edit={false} />;
};

export default Star;
