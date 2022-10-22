const ShortContent = (props) => {
  const { author, created_at, title, content, status, id } = props;

  const divShadow = {
    boxShadow: "2px 2px 9px #c5c5c5",
  };

  const divStyles = {
    backgroundColor: "transparent",
  };

  const spanBlue = {
    color: "#0165ff",
    fontWeight: "bold",
  };

  return (
    <div
      className="single-short-content"
      style={
        status === "active"
          ? divShadow
          : null || status === "inactive"
          ? divStyles
          : null
      }
      onClick={() => props.changeStatus("active", id)}
    >
      <div className="author-date">
        {status === "new" ? <label className="new">NEW</label> : null}
        <span className="author">{author}</span>
        <span className="dot">•</span>
        <span className="created-at">{created_at}</span>
      </div>
      <div className="text-content">
        <span style={status === "new" ? spanBlue : null} className="title">
          {title}
        </span>
        <span className="short-text">{content}</span>
      </div>
    </div>
  );
};

export default ShortContent;
