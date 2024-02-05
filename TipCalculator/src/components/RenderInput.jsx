export function RenderInput({icon,type,title,min}) {
    return (
      <div>
        <h2><label>{title}</label></h2>
        <img src={`src/assets/${icon.src}`} alt={icon.alt}/><input type={type} min={min}/>
      </div>
    );
  }