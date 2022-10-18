import FullContent from "./FullContent";
import ShortContent from "./ShortContent";

const BusinessContext = (props) => {

    const { arrayOfBusinessContexts } = props;

    return ( 
        <>
         <div className="whole-contents">
            <div className="short-contents">
                {arrayOfBusinessContexts.map((item) => (
                    <ShortContent 
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
            <div className="full-contents">
                {arrayOfBusinessContexts.map((item) => (
                    <FullContent 
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
         </div>
        </>
     );
}
 
export default BusinessContext;