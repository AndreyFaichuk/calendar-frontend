import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { Avatar, Button, IconButton, makeStyles, Typography } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";
import { UserActionCreators } from "../../../../store/reducers/user/action-creators";
import { getUserAvatar } from "../../../../api/updateUser";

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
    right: '-24px',
    padding: '0'
  }
}));

const AvatarPreview: FC = () => {
  const { username, avatar } = useTypedSelector((state) => state.user);
  const { isLoading } = useTypedSelector((state) => state.authentification);
  const [avatarPreview, setAvatarPreview] = useState<string>('');
  const { updateUser, postUserAvatar } = useActions(UserActionCreators);
  const classes = useStylesAppNavBar();

  useEffect(() => {
    const fetchData = async () => {
      if (avatar) {
        const fetchedAvatar = await getUserAvatar(avatar!)
        setAvatarPreview(fetchedAvatar)
      }
    }
    fetchData()
  }, [avatar])

  const handleSetAvatar = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    postUserAvatar(file)
  }, []);

  const deleteImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAvatarPreview('');
    updateUser({ avatar: '' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {avatarPreview ?
        <>
          <Avatar
            className={classes.avatarPreview}
            alt={`${username}'s avatar`}
            src={avatarPreview}
          />
          <IconButton
            className={classes.deleteButtonAvatar}
            onClick={(e: any) => deleteImage(e)}
          >
            <DeleteIcon />
          </IconButton>
        </>
        :
        <>
          <Avatar
            className={classes.avatarPreview}>
            <Typography variant='h3'>
              {username[0]}
            </Typography>
          </Avatar>
          <Button variant='contained' component='label'>
            Upload avatar
            <input
              hidden
              accept='image/*'
              multiple
              type='file'
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleSetAvatar(e)}
            />
          </Button>
        </>
      }
    </div>
  );
};

export default AvatarPreview;