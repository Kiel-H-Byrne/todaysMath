// Type definitions for react-icons
import * as React from 'react';

declare module 'react-icons/fi' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
    className?: string;
  }

  export type IconType = React.FC<IconBaseProps>;

  export const FiMenu: IconType;
  export const FiX: IconType;
}

declare module 'react-icons/si' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
    className?: string;
  }

  export type IconType = React.FC<IconBaseProps>;

  export const SiNextdotjs: IconType;
  export const SiReact: IconType;
  export const SiTypescript: IconType;
  export const SiMui: IconType;
  export const SiSketch: IconType;
  export const SiFirebase: IconType;
  export const SiEslint: IconType;
  export const SiVercel: IconType;
  export const SiPrettier: IconType;
  export const SiGoogleanalytics: IconType;
  export const SiGithub: IconType;
  export const SiPwa: IconType;
  export const SiGit: IconType;
  export const SiVisualstudio: IconType;
}

declare module 'react-icons/di' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
    className?: string;
  }

  export type IconType = React.FC<IconBaseProps>;

  export const DiResponsive: IconType;
}
