import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all hover:bg-surface-200 rounded">
            <div className="basis-1/4 mr-2 text-surface-600 text-xs">
                {props.logo ? (
                    <Image src={props.logo} alt="Company Logo" width={70} height={70} className='object-contain object-top pt-2' />
                ) : (
                    <span className="pt-1 block tracking-wider uppercase">{props.startDate} — {props.endDate}</span>
                )}
            </div>
            <div className='basis-3/4'>
                <a href={props.href || "#"} target={props.href ? "_blank" : undefined} rel={props.href ? "noopener noreferrer" : undefined} className='font-medium transition-all group-hover:text-primary-400'>
                    {props.title} · <span className="text-on-background font-semibold">{props.company}</span>
                </a>
                {props.logo && <div className='mb-2 text-surface-600 text-xs'>{props.startDate} — {props.endDate}</div>}
                <div className='text-surface-600 my-2 leading-relaxed text-xs'>{props.description}</div>
                <div className='flex flex-row flex-wrap gap-2 mt-3'>
                    {props.skills ? props.skills.map(function(object){
                        return <div key={object} className='bg-surface-400 py-1 px-3 rounded-full text-xs text-on-background'>{object}</div>
                    }) : ""}
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem;
