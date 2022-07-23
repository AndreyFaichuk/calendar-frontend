import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import { menuItem } from "../../../models/DrawerItem";

const menuItems: menuItem[] = [
  {
    text: "Home",
    icon: <HomeIcon />,
    path: "/"
  },
  {
    text: "My calendar",
    icon: <CalendarMonthIcon />,
    path: "/calendar"
  },
  {
    text: "Profile",
    icon: <PersonIcon />,
    path: "/profile"
  }
];

export default menuItems;
