import React from 'react';

import { classNames, defaultColors, fontSize, fontWeight, getColorVariantsFromColorThemeValue } from 'lib';
import { MarginTop } from '../../../lib';

export interface BoldProps {
    marginTop?: MarginTop,
    children: React.ReactNode
}

const Bold = ({
    marginTop = 'mt-0',
    children,
}: BoldProps) => {
    return(
        <span className={ classNames(
            marginTop,
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            fontSize.sm,
            fontWeight.lg,
        ) }
        >
            { children }
        </span>
    );
};

export default Bold;
