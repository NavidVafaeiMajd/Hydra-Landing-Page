import FancyTopic from "./FancyTopic";

export default function Description({ firstTopic, secoundTopic,children }) {
    const secoundTop = secoundTopic;
    const firstTop = firstTopic
    return (
          <div className='grid grid-cols-2'>
            <FancyTopic arowVisibility={true} firstTopic={firstTop} secoundTopic={secoundTop}/>
            <div className='flex flex-col justify-center items-end'>
                <p>
                    {children}
              </p>
            </div>
        </div>
    )
}