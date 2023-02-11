import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import { Box, SlicedButton, Text } from '@/components/stitches';
import Link from 'next/link';
import { type NextRouter, useRouter } from 'next/router';
import { type ReactNode } from 'react';
import { styled } from 'stitches.config';
import ReactIcon from './index/ReactIcon';
import ThemeToggle from './index/ThemeToggle';

interface Props {
  children?: ReactNode
}

const NavigationBar = ({ children }: Props) => {
  const router: NextRouter = useRouter();

  return (
    <Wrapper>
      <DottedTopBorderBox>
        <NavigationBarBox>
          <ReactIcon />
          <NavbarTitleContainer>
            <Text color="yellow1" size={{ '@initial': 11, '@bp3': 8 }} weight={2} >
              {'FULL STACK '}
              <Text size={{ '@initial': 11, '@bp3': 8 }} weight={1} >DEVELOPER</Text>
            </Text>
            <Text color="cyan1" size={{ '@initial': 5, '@bp3': 4 }} weight={2}>
              {'SEQUENCE: '}
              <Text color="cyanLight1" size={{ '@initial': 5, '@bp3': 4 }} weight={2}>
                {'771-C/3309-M2'}
              </Text>
            </Text>
          </NavbarTitleContainer>
          <NavbarLinksContainer>
            <NavbarLinksRow>
              <Link href="/">
                <SlicedButton
                  type={router.asPath === '/' ? 'primary' : 'secondary'}
                  variant={{ '@bp3': 'standard' }}
                  fontSize={5}
                  weight={3}
                >
                  ANALYSIS
                </SlicedButton>
              </Link>

              <Link href="/about">
                <SlicedButton
                  type={router.asPath === '/about' ? 'primary' : 'secondary'}
                  variant={{ '@bp3': 'standard' }}
                  fontSize={5}
                  weight={3}
                >
                  ABOUT
                </SlicedButton>
              </Link>
              <ThemeToggle />
            </NavbarLinksRow>
          </NavbarLinksContainer>
        </NavigationBarBox>
      </DottedTopBorderBox>

      <Box css={{ height: 30 }} />

      <DottedTopBorderBox withHorizontalLine />

      <Box css={{ height: 20 }} />

      {children}
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '$sizes$tileSize',
});

const NavigationBarBox = styled('div', {
  height: '$sizes$navigationBarHeight',
  paddingLeft: '12px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '14px',
  position: 'relative',

  /** Height for the space reserved for navigation buttons. */
  '$$buttonSpaceHeight': '30px',

  /** How many width px the space for the navigation buttons should start. */
  '$$buttonSpaceStart': '342px',

  '&:before': {
    content: '',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,

    background: '$navigationBarBackground',
    clipPath: `
      polygon(
        0% 0%,
        100% 0%,
        100% $$buttonSpaceHeight,
        calc(21px + $$buttonSpaceStart) $$buttonSpaceHeight,
        $$buttonSpaceStart 100%,
        0% 100%
      )`,
    // zIndex: -1,
    '@bp3': {
      clipPath: 'unset'
    },
  },
  '@bp3': {
    marginBottom: 30
  },
});

const NavbarTitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const NavbarLinksContainer = styled('div', {
  position: 'absolute',
  left: '360px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  height: '$sizes$navigationBarHeight',
  '@bp3': {
    top: '42px',
    left: '0px',
  },
});

const NavbarLinksRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 10,
});

export default NavigationBar;