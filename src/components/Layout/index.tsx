import { ReactNode, FC } from 'react';
import Box from '@mui/material/Box';

import CustomDrawer from '../CustomDrawer';
import Breadcrumb from '../Breadcrumb';
import { CircularProgress, makeStyles, Paper } from '@material-ui/core';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const useStylesLayout = makeStyles((theme) => ({
	rootWraper: {
		flexGrow: 1,
		padding: '23px 10px 0px 23px'
	},
	rootPaper: {
		marginTop: '15px',
		padding: '20px'
	},
	breadcrumb: {
		marginBottom: '10px'
	}
}));

interface Props {
	children: NonNullable<ReactNode>;
}

const Layout: FC<Props> = ({ children }) => {
	const { isLoading } = useTypedSelector((state) => state.authentification);

	const classes = useStylesLayout();
	return (
		<Box sx={{ display: 'flex' }}>
			<CustomDrawer />
			<Box component='main' className={classes.rootWraper}>
				<Breadcrumb />
				<Paper elevation={3} className={classes.rootPaper}>
					{isLoading ? <CircularProgress style={{ margin: "15% 0 0 0" }} /> : <>{children}</>}
				</Paper>
			</Box>
		</Box>
	);
};

export default Layout;
