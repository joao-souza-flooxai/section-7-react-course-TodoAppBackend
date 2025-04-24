import React from 'react';
import IF from "../template/if";

export default function iconButton(props){

    return (
        <IF test={!props.hide}>
            <button className={'btn btn-' + props.style}
                    onClick={props.onClick}>
                <i className={'fa fa-' + props.icon}></i>
            </button>
        </IF>
    );
    
};