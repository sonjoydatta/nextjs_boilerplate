import { NextPage } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { wrapper } from '@store';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
