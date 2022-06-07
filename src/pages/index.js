import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme/startup-theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import ContactUs from 'sections/contact-us';
import Features from 'sections/features';
import BannerNew from 'sections/banner-new';

// import VideoCalling from 'sections/video-calling';
// import Pricing from 'sections/pricing';
// import Clients from 'sections/clients';
// import Blog from 'sections/blog';
// import Faq from 'sections/faq';
// import Support from 'sections/support-team';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="The Edifyer"
          description="We are Providing all type of Software Development, Marketing and Design Services"
        />
        {/* <Banner /> */}
        <BannerNew />
        <Services />
        <Features />
        <ContactUs />
        {/* <VideoCalling /> */}
        {/* <Pricing /> */}
        {/* <Clients /> */}
        {/* <Blog /> */}
        {/* <Faq /> */}
        {/* <Support /> */}
      </Layout>
    </ThemeProvider>
  );
}
