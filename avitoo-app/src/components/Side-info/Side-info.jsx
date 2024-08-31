import "./Side-info.css";

export const SideInfo = ({ img, title, text }) => {
  return (
    <div className="content-side__list-item">
      <img className="content-side__list-item--img" src={img} alt="side-info" />
      <h5 className="content-side__list-item--title">{title}</h5>
      <p className="content-side__list-item--text">{text}</p>
    </div>
  );
};
