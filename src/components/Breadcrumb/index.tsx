import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { toTitleCase } from '../../helpers/toTitleCaseBreadcrumb';

const Breadcrumb: FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const pathnames = location.pathname.split('/').filter((x) => x);
	const isHomePage = location.pathname === '/';

	return (
		<Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small' />}>
			{!isHomePage && (
				<Link
					underline='hover'
					color='inherit'
					style={{ cursor: 'pointer' }}
					onClick={() => navigate('/')}
				>
					Home
				</Link>
			)}
			{pathnames.map((name, index) => {
				const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
				const isLast = index === pathnames.length - 1;
				return isLast ? (
					<Typography color='textPrimary' key={name}>
						{toTitleCase(name)}
					</Typography>
				) : (
					<Link
						color='inherit'
						style={{ cursor: 'pointer' }}
						underline='hover'
						key={name}
						onClick={() => navigate(routeTo)}
					>
						{toTitleCase(name)}
					</Link>
				);
			})}
		</Breadcrumbs>
	);
};

export default Breadcrumb;
