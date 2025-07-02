import Arow2 from "../assets/icon/Arows2";

export default function FancyTopic({ firstTopic, secoundTopic, arowVisibility ,className }) {
    return (<>
                <div className={`mt-1 ${className}`}>
                  <h1 className={`font-bold ${className}`}>
                    {firstTopic}
                  </h1>
                  <h1 className={`min-h-[70px] font-normal! flex gap-3 gap-5 ${className}`}>
                    {secoundTopic} {arowVisibility?<Arow2/> : ''}
                  </h1>
                </div>
    </>);
}
 