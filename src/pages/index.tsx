import Head from 'next/head';
import ThemeToggle from '../modules/index/ThemeToggle';
import { Text, SlicedButton, Box, ColoredBox } from '../components/stitches';
import { styled } from 'stitches.config';
import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import SampleAnalysisContainer from '@/modules/index/SampleAnalysis/SampleAnalysisContainer';
import ChartAnalysisContainer from '@/modules/index/ChartAnalysis/ChartAnalysisContainer';
import DetailedMetricsContainer from '@/modules/index/DetailedMetrics/DetailedMetricsContainer';
import ReactIcon from '@/modules/index/ReactIcon';

export default function Home() {
  return (
    <>
      <Head>
        <title>x7ci - Full Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Wrapper>
          <DottedTopBorderBox>

            <NavigationBar>
              <ReactIcon />
              <NavbarTitleContainer>
                <Text color="yellow" size={{ '@initial': 11, '@bp3': 8 }} weight={2} >
                  {'FULL STACK '}
                  <Text size={{ '@initial': 11, '@bp3': 8 }} weight={1} >DEVELOPER</Text>
                </Text>
                <Text color="cyan" size={{ '@initial': 5, '@bp3': 4 }} weight={2}>
                  {'SEQUENCE: '}
                  <Text color="cyanLight" size={{ '@initial': 5, '@bp3': 4 }} weight={2}>
                    {'771-C/3309-M2'}
                  </Text>
                </Text>
              </NavbarTitleContainer>
              <NavbarLinksContainer>
                <NavbarLinksContainer2>
                  <SlicedButton>index</SlicedButton>
                  <SlicedButton>about</SlicedButton>
                  <ThemeToggle />
                </NavbarLinksContainer2>
              </NavbarLinksContainer>
            </NavigationBar>
          </DottedTopBorderBox>

          <Box css={{ height: 30 }} />

          <DottedTopBorderBox withHorizontalLine>
            {/* <Box css={{ height: 30 }} />
            This is a test container.
            <div>
              This is a test container.
            </div>
            This is a test container. */}
          </DottedTopBorderBox>
          <Box css={{ height: 20 }} />
          <ColoredBox color="cyan">
            <Text color="gray1" weight="2" >SAMPLE ANALYSIS</Text>
          </ColoredBox>
          <Box css={{ height: 20 }} />
          <ComponentsContainer>
            <Box css={{ flex: 1, maxWidth: 600 }}>
              <SampleAnalysisContainer />
            </Box>
            <Box css={{ flex: 2, maxWidth: 1200 }}>
              <ChartAnalysisContainer />
            </Box>
            <Box css={{ flex: 2, maxWidth: 800 }}>
              <DetailedMetricsContainer />
            </Box>
          </ComponentsContainer>
          <Box css={{ height: 60 }} />
          <DottedTopBorderBox withHorizontalLine />

          {/* <BorderContainer>
            <ThemeToggle />
            <Text>Test</Text>
            <Text>
              Get started by editing&nbsp;
              <code>pages/index.tsx</code>
            </Text>

            <TextLabel>
              <Text size={8} weight={2}>
                {'FULL STACK '}
                <Text size={8} weight={1} >DEVELOPER</Text>
              </Text>
            </TextLabel>

            <Text>github</Text>

          </BorderContainer> */}
        </Wrapper>
      </main>
    </>
  );
}

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '$sizes$tileSize',
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

const NavbarLinksContainer2 = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});

const NavigationBar = styled('div', {
  height: '$sizes$navigationBarHeight',
  paddingLeft: '12px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '14px',
  position: 'relative',

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
        100% 25px,
        367px 25px,
        342px 100%,
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

const ComponentsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  flexWrap: 'wrap',
});
