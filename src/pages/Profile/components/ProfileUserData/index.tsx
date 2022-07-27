import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Grid, Slider, Button, Paper, makeStyles, Avatar, IconButton, Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';

import Input from '../../../../controls/Input';
import { UserState } from '../../../../store/reducers/user/types';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { UserActionCreators } from '../../../../store/reducers/user/action-creators';
import areObjectsEquality from '../../../../helpers/areObjectsEquality';

const useStylesAppNavBar = makeStyles((theme) => ({
	avatarPreview: {
		boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
		marginBottom: '15px',
		margin: '0 auto',
		width: '90px',
		height: '90px',
		backgroundColor: 'orange'
	},
	deleteButtonAvatar: {
		position: 'absolute',
		top: '0',
		right: '0',
		padding: '0'
	}
}));

const ProfileUserData: FC = () => {
	const user = useTypedSelector((state) => state.user);
	const { username } = useTypedSelector((state) => state.user);
	const [formValues, setFormValues] = useState(user as UserState);
	const classes = useStylesAppNavBar();
	const { updateUser } = useActions(UserActionCreators);

	const handleCreateBase64 = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		const file: File = (target.files as FileList)[0];
		const base64 = await convertToBase64(file);
		setFormValues({
			...formValues,
			avatar: (base64 as string)
		})
		e.target.value = '';
	}, []);

	console.log(formValues)

	const convertToBase64 = (file: any) => {
		return new Promise((res, rej) => {
			const fileReader = new FileReader();
			if (!file) {
				toast.error('Please select an image!')
			} else {
				fileReader.readAsDataURL(file);
				fileReader.onload = () => res(fileReader.result)
			};
			fileReader.onerror = (error) => {
				rej(error)
			};
		})
	};

	const deleteImage = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setFormValues({
			...formValues,
			avatar: ''
		})
	};

	const handleInputChange = (e: FormEvent<EventTarget>) => {
		const { name, value } = e.target as HTMLInputElement;
		setFormValues({
			...formValues,
			[name]: value
		});
	};

	const handleSliderChange = (name: string) => (e: ChangeEvent<{}>, value: number | number[]) => {
		setFormValues({
			...formValues,
			[name]: value
		});
	};

	const handleSubmit = () => {
		if (areObjectsEquality(user, formValues)) {
			toast.error('Nothing to save!');
		} else {
			updateUser(formValues);
		}
	};

	return (
		<Grid container
			alignItems='flex-start'
			justifyContent='center'
			direction='column'
			alignContent='flex-start'
			spacing={4}
			style={{ padding: '10px 0px 0px 0px' }}
		>
			<Grid item>
				<Input
					label='Name'
					name='username'
					type='text'
					value={formValues.username}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item>
				<Input
					label='Email'
					name='email'
					type='text'
					value={formValues.email}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item>
				<div style={{ width: '400px' }}>
					Age
					<Slider
						value={formValues.age}
						onChange={handleSliderChange('age')}
						defaultValue={1}
						step={1}
						min={16}
						max={60}
						valueLabelDisplay='auto'
					/>
				</div>
			</Grid>
			<Grid item>
				<FormControl>
					<FormLabel>Gender</FormLabel>
					<RadioGroup name='gender' value={formValues.gender} onChange={handleInputChange} row>
						<FormControlLabel
							key='male'
							value='male'
							control={<Radio size='small' color='primary' />}
							label='Male'
						/>
						<FormControlLabel
							key='female'
							value='female'
							control={<Radio size='small' color='primary' />}
							label='Female'
						/>
						<FormControlLabel
							key='other'
							value='other'
							control={<Radio size='small' color='primary' />}
							label='Other'
						/>
					</RadioGroup>
				</FormControl>
			</Grid>
			<Grid item>
				<div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
					{formValues.avatar ?
						<Avatar
							className={classes.avatarPreview}
							alt={`${username}'s avatar`}
							src={formValues.avatar}
						/>
						:
						<Avatar
							className={classes.avatarPreview}>
							<Typography variant='h3'>
								{username[0]}
							</Typography>
						</Avatar>
					}
					<Button variant='contained' component='label'>
						Upload avatar
						<input
							hidden
							accept='image/*'
							multiple type='file'
							onChange={(e: ChangeEvent<HTMLInputElement>) => handleCreateBase64(e)}
						/>
					</Button>
					{formValues.avatar &&
						<IconButton
							className={classes.deleteButtonAvatar}
							onClick={(e: any) => deleteImage(e)}
						>
							<DeleteIcon />
						</IconButton>
					}
				</div>
			</Grid>
			<Grid item>
				<Button
					variant='contained'
					color='primary'
					onClick={handleSubmit}
					style={{ margin: '15px 0 0 0' }}
				>
					Save changes
				</Button>
			</Grid>
		</Grid >
	);
};

export default ProfileUserData;
