import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: StitchesCss
  size?: number
}

const StitchesIcon = ({ color, css, size = 14 }: Props) => {
  return (
    <Box
      as="svg"
      width="35"
      height="35"
      viewBox="0 0 35 35"
      css={{ fill: `$${color}`, size, ...css }}
    >
      <title>Stitches logo</title>
      <Box
        as="circle"
        cx="17.5"
        cy="17.5"
        r="14.5"
        stroke="currentColor"
        strokeWidth="2"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="path"
        d="M12.8184 31.3218L31.8709 20.3218"
        stroke="currentColor"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="path"
        d="M3.31836 14.8674L22.3709 3.86743"
        stroke="currentColor"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="path"
        d="M8.65332 29.1077L25.9738 19.1077"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="path"
        d="M9.21582 16.0815L26.5363 6.08154"
        stroke="currentColor"
        strokeLinecap="round"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="path"
        d="M13.2334 14.2297L22.5099 21.1077"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="path"
        d="M16.6973 12.2302L25.9736 19.1078"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="path"
        d="M9.21582 16.0815L19.0459 23.1078"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        css={{ fill: `$${color}` }}
      />
    </Box>

  );
};

export default StitchesIcon;
