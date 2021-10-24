import React from 'react';
import styles from './text.scss';
import classNames from 'classnames';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColors {
    'primary' = '$primary',
    'white' = '$white',
    'greyF4' = '$greyF4',
    'greyC4' = '$greyC4',
    'braun' = '$braun',
    'grey99' = '$grey99',
    'greyEC' = '$greyEC',
    'grey66' = '$grey66',
    'greyD9' = '$greyD9',
    'green' = '$green',
    'black' = '$black'

}


interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div',
    children?: React.ReactNode,
    size: TSizes,
    mobileSize?: TSizes,
    tabletSize?: TSizes,
    desktopSizes?: TSizes,
    color?: EColors;
}

export function Text(props: ITextProps) {

    const {As = 'span', color = EColors.black, children, size, mobileSize, tabletSize, desktopSizes} = props;

    const classes = classNames(
        styles[`s${size}`],
        {[styles[`m${mobileSize}`]]: mobileSize},
        {[styles[`t${tabletSize}`]]: tabletSize},
        {[styles[`d${desktopSizes}`]]: desktopSizes},
        styles[color]
    );

    return (
        <As className={classes}>
            {children}
        </As>
    );
}
