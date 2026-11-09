import React from "react";

function EducationItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all bg-background hover:bg-surface-200 rounded">
            <div className='mr-2 text-surface-600 text-xs basis-1/4 pt-1 uppercase tracking-wider'>{props.startDate} {checkEndDate(props)}</div>
            <div className='basis-3/4'>
                <a href={props.href || "#"} target={props.href ? "_blank" : undefined} rel={props.href ? "noopener noreferrer" : undefined} className='font-medium transition-all group-hover:text-primary-400'>
                    {props.subject} {props.degree ? `(${props.degree})` : ''}
                </a>
                <div className='text-surface-600 my-1 font-medium'>{props.university}</div>
                <div className='text-surface-600 text-xs leading-relaxed'>{props.description}</div>
            </div>
        </div>
    )
}

function checkEndDate(props) {
    if (!props.endDate) {
        return '';
    } else {
        return ('— ' + props.endDate); 
    }  
}

export default EducationItem;
