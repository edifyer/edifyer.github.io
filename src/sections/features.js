/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import FeatureNew from 'components/cards/feature-new';
import { LearnMore } from 'components/link';
import Image from 'components/image';

import checkFilledCircle from 'assets/images/icons/check-circle-filled.png';
import { Fragment } from 'react';
import SectionHeadingNew from 'components/section-heading-new';

const data = [
  {
    id: 1,
    color: '#28D1DC',
    value: '320K+',
    title: 'Social Media Followers',
  },
  {
    id: 2,
    color: '#FF753A',
    value: '10K+',
    title: 'Influencer Connections',
  },
  {
    id: 3,
    color: '#FA578E',
    value: '50+',
    title: 'Projects',
  },
  {
    id: 4,
    color: '#28DCB2',
    value: '40+',
    title: 'Happy Clients',
  },
];

const Features = () => {
  return (
    <Box
      as="section"
      id="features"
      variant="section.features"
      sx={styles.section}
    >
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            {data?.map((item) => (
              <FeatureNew key={item?.id} feature={item} />
            ))}
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeadingNew
              sx={styles.heading}
              title={
                <Fragment>
                  Smart Jackpots <br />
                  that you may love this anytime &amp; anywhere
                </Fragment>
              }
              description="Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
            />
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Unlimited design possibility
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Completely responsive features
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Unlimited Technical Support
            </Text>
            {/* <Box sx={styles.explore}>
              <LearnMore path="#!" label="Explore More" />
            </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

const styles = {
  section: {
    pt: [10],
    pb: [6, null, null, 12, 15],
    background: '#F9FBFD',
  },
  contentWrapper: {
    gap: [30, 30, 30, 30, 40, 60, 70, 120],
    display: ['flex', 'flex', 'grid'],
    flexDirection: ['column-reverse', 'column-reverse', 'unset'],
    gridTemplateColumns: [
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.2fr 0.8fr',
    ],
    alignItems: 'center',
  },
  leftContent: {
    gap: [20, 20, 20, 20, 30, 45],
    display: ['grid', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'flex-start',
    '> div': {
      ':first-of-type': {
        mt: ['65px'],
      },
      ':last-of-type': {
        mt: ['-65px'],
      },
    },
  },
  rightContent: {
    // ml: ['120px'],
  },
  heading: {
    textAlign: 'left',
    mb: ['20px'],
    mt: [0, 0, '-70px'],
    h2: {
      fontSize: ['28px', '28px', '28px', '28px', '36px', '40px'],
      lineHeight: [1.25, 1.5],
      letterSpacing: '-1.5px',
      br: {
        display: ['none', 'none', 'none', 'block'],
      },
    },
    p: {
      mt: ['15px', '10px'],
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
