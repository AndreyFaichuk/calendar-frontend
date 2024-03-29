import { ChangeEvent, FC, FormEvent, useState } from 'react';
import {
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Grid, Slider, Button
} from '@material-ui/core';
import { toast } from 'react-toastify';

import Input from '../../../../controls/Input';
import { UserState } from '../../../../store/reducers/user/types';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { UserActionCreators } from '../../../../store/reducers/user/action-creators';
import areObjectsEquality from '../../../../helpers/areObjectsEquality';
import AvatarPreview from '../AvatarPreview';

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
        <AvatarPreview />
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
