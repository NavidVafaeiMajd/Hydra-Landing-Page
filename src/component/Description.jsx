import FancyTopic from "./FancyTopic";

export default function Description({ firstTopic, secoundTopic,children }) {
    const secoundTop = secoundTopic;
    const firstTop = firstTopic
    return (
          <div className='grid md:grid-cols-2'>
            <FancyTopic arowVisibility={true} firstTopic={firstTop} secoundTopic={secoundTop}/>
            <div className='flex flex-col justify-center items-end md:my-4 my-2 '>
                <p>
                    {children}
              </p>
            </div>
        </div>
    )
}