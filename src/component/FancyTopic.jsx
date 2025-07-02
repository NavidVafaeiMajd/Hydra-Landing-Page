import Arow2 from "../assets/icon/Arows2";

export default function FancyTopic({ firstTopic, secoundTopic, arowVisibility ,className }) {
    return (<>
                <div className={`mt-1 max-md:text-center ${className}`}>
                  <h1 className={`font-bold ${className}`}>
                    {firstTopic}
                  </h1>
                  <h1 className={` font-normal! flex md:gap-3 gap-5 max-md:justify-center ${className}`}>
                    {secoundTopic} {arowVisibility?<Arow2/> : ''}
                  </h1>
                  
                </div>
    </>);
}
 