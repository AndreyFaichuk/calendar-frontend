import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import Input from '../../../../controls/Input';
import { UserState } from '../../../../store/reducers/user/types';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { UserActionCreators } from '../../../../store/reducers/user/action-creators';

const ProfileUserData: FC = () => {
	const user = useTypedSelector((state) => state.user);
	const [formValues, setFormValues] = useState(user as UserState);
	const { updateUser } = useActions(UserActionCreators);

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

	const handleSubmit = (event: any) => {
		event.preventDefault();
		updateUser(formValues);
	};

	return (
		<form onSubmit={handleSubmit}>
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
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
						<Button variant="contained" color='inherit'>
							Upload avatar
							<input hidden accept="image/*" multiple type="file" />
						</Button>
					</div>
				</Grid>
				<Grid item>
					<Button
						variant='contained'
						color='primary'
						type='submit'
						style={{ marginTop: '15px' }}
					>
						Save changes
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default ProfileUserData;
