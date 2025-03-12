import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
export const mainNavbarItems=[
    {
        id:0,
        icon:<HomeIcon/>,
        label:"Home",
        route:"/"

    },

    {
        id:1,
        icon:<AccountBalanceIcon/>,
        label:"General Ledger",
        route:"generalledger"

    },
    {
        id:2,
        icon:<AdminPanelSettingsIcon/>,
        label:"Administration",
        route:"administration"

    },
    // {
    //     id2,
    //     icon:<PeopleIcon/>,
    //     label:"Expenses",
    //     route:"route"

    // },
    // {
    //     id:3,
    //     icon:<AdminPanelSettingsIcon/>,
    //     label:"Invoices",
    //     route:"route"

    // },

]
