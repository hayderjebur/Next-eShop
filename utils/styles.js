import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    background: '#203040',
    '& a': {
      color: '#fff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#fff',
  },
  grow: {
    flexGrow: 1,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
  },
});
export default useStyles;
