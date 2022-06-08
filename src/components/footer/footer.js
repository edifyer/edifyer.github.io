/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Text, Container } from 'theme-ui';
import { rgba } from 'polished';
import { Link } from 'components/link';
import Logo from 'components/logo';

const menuItems = [
  // {
  //   path: '#home',
  //   label: 'Home',
  // },
  // {
  //   path: '#services',
  //   label: 'Services',
  // },
  {
    path: 'tel:+919977127384',
    label: 'Call- +91-99771-27384',
    target: '_blank',
  },
  {
    path: 'mailto:contact@edifyer.co',
    label: 'Mail- contact@edifyer.co',
    target: '_blank',
  },
  {
    path: 'https://www.instagram.com/theedifyer',
    label: 'Instagram',
    target: '_blank',
  },
];

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Flex sx={styles.footerInner}>
          <Flex sx={styles.copyright}>
            <Logo isWhite sx={styles.logo} />
            <Text as="span">All right reserved</Text>
          </Flex>
          <Flex as="ul" sx={styles.footerNav}>
            {menuItems?.map((item, index) => (
              <li key={index}>
                {/* <Link path={item?.path} target={item?.target}>
                  {item?.label}
                </Link> */}
                <a href={item?.path} target={item?.target}>
                  {item?.label}
                </a>
              </li>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2B293E',
    pt: [6],
    pb: [6],
  },
  footerInner: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, null, 'row'],
  },
  copyright: {
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      color: rgba('white', 0.7),
      fontSize: 1,
      lineHeight: '18px',
      mt: [3, null, null, null, 0],
      ml: [0, null, null, null, '15px'],
      textAlign: ['center', null, null, 'left'],
    },
  },
  logo: {
    color: '#fff',
  },
  footerNav: {
    listStyle: 'none',
    // flexDirection: ['column', null, null, null, 'row'],
    m: ['25px 0 0', null, null, null, 0],
    p: 0,
    li: {
      '+ li': {
        ml: [3, null, null, null, 3, 4],
      },
      a: {
        color: 'white',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: [1, null, null, 2, 1, 2],
      },
    },
  },
};
