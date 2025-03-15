import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import { iconButtonClasses } from '@mui/material';


export const mainNavbarItems=[
    {
        id:0,
        icon:<HomeIcon/>,
        label:"Home",
        subItems:null,
        route:"/"

    },
    {
        id:1,
        icon:<HomeIcon/>,
        label:"Company",
        route:"",
        subItems:[{
            id:1,
            icon:<HomeIcon/>,
            label:"Company Set Up",
            route:"companysetup"
        }]
    },

    {
        id:2,
        icon:<AccountBalanceIcon/>,
        label:"General Ledger",
        route:"",
        subItems:[{
            id:1,
            icon:<AccountBalanceIcon/>,
            label:"Account Setup",
            route:"glsetup"
        }]

    },
    {
        id:3,
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
