/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
// import LogoSvg from 'components/icons/logo';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      The Edifyer
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    maxWidth: [null, null, null, 185, null, 'none'],
    fontWeight: 800,
    fontSize: '30px',
    // svg: {
    //   height: 'auto',
    //   width: [128, null, '100%'],
    // },
  },
};
