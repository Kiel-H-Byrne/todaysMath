import React from 'react';
import { DiResponsive } from 'react-icons/di';
import { FiMenu, FiX } from 'react-icons/fi';
import { SiEslint, SiFirebase, SiGit, SiGithub, SiGoogleanalytics, SiMui, SiNextdotjs, SiPrettier, SiPwa, SiReact, SiSketch, SiTypescript, SiVercel, SiVisualstudio } from 'react-icons/si';

// Define a mapping of icon names to their components
const iconMap = {
  FiMenu,
  FiX,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiMui,
  SiSketch,
  SiFirebase,
  SiEslint,
  SiVercel,
  SiPrettier,
  SiGoogleanalytics,
  SiGithub,
  SiPwa,
  SiGit,
  SiVisualstudio,
  DiResponsive
};

// Define the props for the IconWrapper component
interface IconWrapperProps {
  name: keyof typeof iconMap;
  size?: number | string;
  color?: string;
  className?: string;
}

// Create the IconWrapper component
const IconWrapper: React.FC<IconWrapperProps> = ({ name, ...props }) => {
  // Get the icon component from the map
  const IconComponent = iconMap[name];
  
  // Return the icon component with the props 
  //@ts-ignore
  return <IconComponent {...props} />;
};

export default IconWrapper;
