import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Link, useNavigate } from 'react-router-dom';
import Circle from './CustomTags/Circle';
import { ArrowDropDown, ArrowLeft, ArrowRight } from '@mui/icons-material';
import { setPrimaryTheme, toggleTheme } from '../redux/theme/themeActions';
import { handleNotification, handleOptionsDrawer } from '../redux/UIManagement/UiActions';
import Tooltip from './CustomTags/Tooltip';
import { Switch } from '@mui/material';
import { ProjectDataType, setSelectedProject } from '../redux/project/projectAction';

const Options = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isOpen = useSelector((state: RootState) => state.ui.areOptionsOpen);
    const activePrimary = useSelector((state: RootState) => state.theme.primary);
    const isDark = useSelector((state : RootState ) => state.theme.isDark );

    const projects = useSelector((state : RootState) => state.project.projects);

    const [appearanceOpen, setAppearanceOpen] = useState<boolean>(false);
    const [projectOpen , setProjectOpen] = useState<boolean>(true);
    const [ paletteOpen , setPaletteOpen ] = useState<boolean>(false);

    const setPrimary = (theme: string) => {
        if (activePrimary !== theme) {
            dispatch(setPrimaryTheme(theme));
            dispatch(handleNotification('Theme set successfully', 'success'));
        }
    };

    const handleOptionDrawer = (event : React.MouseEvent) => {
        event.stopPropagation();
        dispatch(handleOptionsDrawer());
    };

    const handleThemeChange = () => {
      dispatch(toggleTheme());
    }

    const handleProjectSelection = ( project :ProjectDataType) => {
        dispatch(setSelectedProject(project));
        navigate(`/workflow-dashboard/project/${project.projectId}/tasks`)
      }

    return (
        <div onClick={() => {if(!isOpen) dispatch(handleOptionsDrawer())}}
            className={`w-[180px] shadow-lg drop-shadow-xl h-full bg-background dark:bg-dark-background fixed top-10 left-0
                ${!isOpen && 'cursor-pointer'}
                border-0 border-r-[0.01px] border-primary
                transition-transform duration-300 ease-in-out flex flex-col py-4
                ${isOpen ? 'translate-x-0' : '-translate-x-[90%]'}
        `}>
            <div className='w-full flex flex-row items-center justify-end'>
                <Tooltip message={isOpen ? 'Close Drawer' : 'Open Drawer'} position='right'>
                    <button className='ml-2' onClick={handleOptionDrawer}>
                        {isOpen ? 
                            <ArrowLeft /> :
                            <ArrowRight />
                        }
                    </button>
                </Tooltip>
            </div>
            {isOpen &&
                <>
                    <Link to='/'>
                        <button className='w-full text-left px-4 py-1 hover:bg-primary hover:text-white'>Home</button>
                    </Link>

                    <button className='w-full text-left px-4 py-1 hover:bg-primary hover:text-white'>Profile</button>

                    <button onClick={() => setAppearanceOpen(!appearanceOpen)} className='w-full text-left px-4 py-1 hover:bg-primary hover:text-white flex flex-row items-center justify-between'>
                        Appearance {appearanceOpen ? <ArrowDropDown /> : <ArrowRight />}
                    </button>
                    <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${appearanceOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <button className='w-full text-left  px-6 py-1 flex flex-row items-center justify-between'>
                          {isDark ? 'Dark' : 'Light' } 
                          <Tooltip message={isDark ? 'Switch to light Theme' : 'Switch to dark theme'} position='bottom'>
                            <Switch onClick={handleThemeChange} checked={isDark} size='small' />
                          </Tooltip>
                        </button>
                        <button onClick={() => setPaletteOpen(!paletteOpen)} className='w-full text-left  px-6 py-1 hover:bg-primary hover:text-white flex flex-row items-center justify-between'>
                          Color Palette {paletteOpen ? <ArrowDropDown /> : <ArrowRight />}
                        </button>
                        <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${paletteOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <button onClick={() => setPrimary('#24689c')} className='w-full flex flex-row items-center gap-1 text-left text-sm px-8 py-1 hover:bg-primary hover:text-white'>
                              <Circle className='h-[10px] w-[10px]' color='#24689c' /> Blue
                          </button>
                          <button onClick={() => setPrimary('#aa0f44')} className='w-full flex flex-row items-center gap-1 text-left text-sm px-8 py-1 hover:bg-primary hover:text-white'>
                              <Circle className='h-[10px] w-[10px]' color='#aa0f44' /> Red
                          </button>
                          <button onClick={() => setPrimary('#006400')} className='w-full flex flex-row items-center gap-1 text-left text-sm px-8 py-1 hover:bg-primary hover:text-white'>
                              <Circle className='h-[10px] w-[10px]' color='#006400' /> Green
                          </button>
                        </div>
                    </div>
                    <Link to={'/workflow-dashboard/projects'}>
                        <button className='w-full text-left px-4 py-1 hover:bg-primary hover:text-white'>Workspaces</button>
                    </Link>
                    <button onClick={() => setProjectOpen(!projectOpen)} className='w-full text-left  px-4 py-1 hover:bg-primary hover:text-white flex flex-row items-center justify-between'>
                          Projects {projectOpen ? <ArrowDropDown /> : <ArrowRight />}
                    </button>
                    <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out  ${projectOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {projects.map((project,index) => (
                            
                            <button key={index} onClick={() => handleProjectSelection(project)}  className='w-full text-left  px-6 py-1 flex flex-row items-center justify-between hover:bg-primary hover:text-white'>
                                {project.projectId}
                            </button>
                           
                        ))}
                         
                    </div>
                    <button className='w-full text-left px-4 py-1 hover:bg-primary hover:text-white'>About</button>
                </>
            }
        </div>
    );
};

export default Options;
