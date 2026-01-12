import React from 'react';

export default function SectionHeading({ title, subTitle, cssClass }: any) {
  return (
    <div className={cssClass || 'text-center'}>
      {title && (
        <h2 className="text-[3.5rem] text-black font-semibold fredoka capitalize">{title}</h2>
      )}
      {subTitle && <p className="font-normal text-lg text-[#6C6D71] mt-2 onesta">{subTitle}</p>}
    </div>
  );
}
