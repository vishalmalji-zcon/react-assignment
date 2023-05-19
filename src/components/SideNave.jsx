import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../appStore';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import InventoryIcon from '@mui/icons-material/Inventory';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import { makeStyles } from '@mui/styles';

import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const useStyles = makeStyles({
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },
    paper: {
      background: "blue"
    }
  });



export default function SideNave() {
    const theme = useTheme();
    // const [open, setOpen] = React.useState(true);
    const navigate = useNavigate()
    const open = useAppStore((state) => state.dopen)
    const openC = useAppStore((state) => state.cOpen)
    const updateColOpen =  useAppStore((state)=> state.updateColOpen)
    const dopen = useAppStore((state) => state.dopen)

    // const [openC, setOpenc] = React.useState(false)
    const handleClick = (e) => {
        updateColOpen(!openC)
    }

    const handleClickCollapse = (e) => {
        console.log("------",openC)
        updateColOpen(true)
        console.log("------",openC)
    }
    
    
      const classes = useStyles();
    return (
        <Box sx={{ display: 'flex', backgroundColor:"blue" }}>
            <Box height={30} />
            <CssBaseline />
            <Drawer   variant="permanent" open={open} PaperProps={{
    sx: {
      color: "rgba(255,255,255,1)",
      backgroundColor: "rgba(27,26,71)" //27, 26, 71
    }
  }} >
                <DrawerHeader>
                    <IconButton >
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List
                aria-labelledby="nested-list-subheader"
                >
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/dashboard') }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: "white"
                                }}
                            >
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    
                
                    {/* <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/products') }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: "white"
                                }}
                            >
                                <InventoryIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Products"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem> */}

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={handleClick}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: "white"
                                }}
                            >
                                <WorkOutlineSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Projects/Jobs"} sx={{ opacity: open ? 1 : 0 }} />
                            {dopen && <>{openC ? <ExpandLess/>: <ExpandMore/>}</>}
                        </ListItemButton>
                        <Collapse in={openC && dopen}>
                            <List component="div" disablePadding>
                                <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/projects') }}>
                                    <ListItemButton 
                                     sx={{
                                        minHeight: 25,
                                        justifyContent: openC ? 'initial' : 'center',
                                        px: 2.5,
                                    }}>
                                    <ListItemIcon>
                                       
                                    </ListItemIcon>
                                    <ListItemText primary={"Projects"} sx={{ opacity: openC ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/about') }}>
                                    <ListItemButton 
                                     sx={{
                                        minHeight: 48,
                                        justifyContent: openC ? 'initial' : 'center',
                                        px: 2.5,
                                    }}>
                                    <ListItemIcon>
                                       
                                    </ListItemIcon>
                                    <ListItemText primary={"Jobs"} sx={{ opacity: openC ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/about') }}>
                                    <ListItemButton 
                                     sx={{
                                        minHeight: 48,
                                        justifyContent: openC ? 'initial' : 'center',
                                        px: 2.5,
                                    }}>
                                    <ListItemIcon>
                                       
                                    </ListItemIcon>
                                    <ListItemText primary={"Clients"} sx={{ opacity: openC ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Collapse>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/about') }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: "white"
                                }}
                            >
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={"About"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

        </Box>
    );
}
