const FullContent = (props) => {

    const {author, title, content, status} = props;
    const now = new Date();
    const day = now.getDate()
    const month = now.toLocaleDateString('en',{
        month: 'long',
        
    })
    const hour = now.getHours()
    const minutes = now.getMinutes()
    return ( 
        <>      
            {status === "active" ? <div>  
                <span className="full-content-title">{title}</span>
                <div className="full-content-items">
                    <div className="full-content-author-date">
                        <span className="full-content-author">{author}</span>
                        <span className="dot">•</span>
                        <span className="full-content-day">Today, {day === 1 ? `${day}st` : null || day === 2 ? `${day}sd` : null || day === 3 ? `${day}rd` : null || day >= 4 ? `${day}th`: null }</span>
                        <span className="full-content-month">{month < 10 ? `0${month}` : month}</span>
                        <span className="dot">•</span>
                        <span className="full-content-time"> {hour < 10 ? `0${hour}` : hour}:{minutes < 10 ? `0${minutes}` : minutes}  </span>
                    </div>
                    <div className="full-content-text">{content}</div>  
                </div>
            </div>  : null}
        
        </>
     );
}
 
export default FullContent;