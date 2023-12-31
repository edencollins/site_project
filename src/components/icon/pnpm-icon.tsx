import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  secondColor?: keyof typeof theme.colors
  css?: StitchesCss
  width?: number
  height?: number
}

const PnpmIcon = ({ color, secondColor, css, width, height }: Props) => {
  return (
    <Box
      as="svg"
      viewBox="66 33.5 184.5 184"
      fill="none"
      css={{ width, height, ...css }}
    >
      <title>PNPM logo</title>
      <Box
        as="path"
        d="M67.59 35L247.59 35L247.59 215L67.59 215L67.59 35Z"
      />
      <Box
        as="path"
        d="M237.6 95L187.6 95L187.6 45L237.6 45L237.6 95Z"
        css={{ fill: `$${secondColor}` }}
      />
      <Box
        as="path"
        d="M182.59 95L132.59 95L132.59 45L182.59 45L182.59 95Z"
        css={{ fill: `$${secondColor}` }}
      />
      <Box
        as="path"
        d="M127.59 95L77.59 95L77.59 45L127.59 45L127.59 95Z"
        css={{ fill: `$${secondColor}` }}
      />
      <Box
        as="path"
        d="M237.6 150L187.6 150L187.6 100L237.6 100L237.6 150Z"
        css={{ fill: `$${secondColor}` }}
      />
      <Box
        as="path"
        d="M182.59 150L132.59 150L132.59 100L182.59 100L182.59 150Z"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="path"
        d="M182.59 205L132.59 205L132.59 155L182.59 155L182.59 205Z"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="path"
        d="M237.6 205L187.6 205L187.6 155L237.6 155L237.6 205Z"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="path"
        d="M127.59 205L77.59 205L77.59 155L127.59 155L127.59 205Z"
        css={{ fill: `$${color}` }}
      />
    </Box>
  );
};

export default PnpmIcon;
