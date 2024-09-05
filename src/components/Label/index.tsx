import React from 'react';
import { styled } from '@mui/material/styles';

const LabelWrapper = styled('span')(
    ({ color }: { color: string }) => `
      background-color: ${color};
      padding: 4px 8px;
      font-size: 13px;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-height: 24px;
      
      &.MuiLabel {
        &-primary {
          background-color: #e3f2fd; /* Light blue */
          color: #1976d2; /* Blue */
        }

        &-black {
          background-color: #000000; /* Black */
          color: #ffffff; /* White */
        }
        
        &-secondary {
          background-color: #f3e5f5; /* Light purple */
          color: #ab47bc; /* Purple */
        }
        
        &-success {
          background-color: #e8f5e9; /* Light green */
          color: #388e3c; /* Green */
        }
        
        &-warning {
          background-color: #fff3e0; /* Light orange */
          color: #f57c00; /* Orange */
        }
              
        &-error {
          background-color: #ffebee; /* Light red */
          color: #d32f2f; /* Red */
        }
        
        &-info {
          background-color: #e1f5fe; /* Light cyan */
          color: #0288d1; /* Cyan */
        }
      }
`
);

type LabelColor = 'primary' | 'black' | 'secondary' | 'error' | 'warning' | 'success' | 'info';

interface LabelProps {
    className?: string;
    color?: LabelColor;
    children?: React.ReactNode;
    // [x: string]: any;
}

const Label: React.FC<LabelProps> = ({
    className,
    color = 'secondary',
    children,
    ...rest
}) => {
    return (
        <LabelWrapper className={`MuiLabel-${color}`} color="#f3e5f5" {...rest}>
            {children}
        </LabelWrapper>
    );
};

export default Label;
