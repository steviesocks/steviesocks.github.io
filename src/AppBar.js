import { Header } from 'grommet';

const AppBar = (props) => (
  <Header
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
    sticky="scrollup"
  />
);

export default AppBar;