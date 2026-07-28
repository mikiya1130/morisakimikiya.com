import { styled } from '@/styled-system/jsx';

const Icon = styled('svg', {
  base: { flexShrink: 0 },
  variants: { size: { logo: { w: '50px', h: '50px' } } },
});

export default Icon;
