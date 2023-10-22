import './styles/index.scss';

import { withProviders } from 'app/providers';

import { Routing } from 'pages';

const App = () => {
  return <Routing />;
};

export default withProviders(App);
