import React from "react";
import "./SidebarOption.css";

function SidebarOption({
  title,
  Icon,
  name,
  src,
}) {
  return (
    <div className='sidebar__option'>
      {Icon && (
        <div className={name}>
          <Icon src={src ? src : ""} />
        </div>
      )}
      <p>{title}</p>
    </div>
  );
}

export default SidebarOption;
