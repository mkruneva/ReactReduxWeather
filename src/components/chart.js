import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
    return (
        <Sparklines height={120} height={180} data={props.data}>
            <SparklinesLine color={props.colour} />
        </Sparklines>
    )
}