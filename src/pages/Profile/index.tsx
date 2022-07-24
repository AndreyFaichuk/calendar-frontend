import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import ProfileUserData from './components/ProfileUserData';

const Profile: FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom component="div">
				Profile
			</Typography>
			<ProfileUserData />
		</>
	);
};

export default Profile;

// {
// 	/* <>
// 			<button onClick={() => navigate('test')}>asd</button>
// 			<Routes>
// 				<Route path='test' element={<Test />} />
// 			</Routes>
// 		</> */
// }
