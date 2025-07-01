import Arow1 from "../assets/icon/Arows";

export default function Step({firstTopic , secoundTopic , count}) {
    return (<>
                <div className='flex flex-col gap-25 justify-center items-center'>
              <div>
                <span className='border border-black/70 border-20 bg-primary text-7xl font-bold px-10 py-10 w-auto! rounded-full text-darker'>{ count}</span>
              </div>
              <div className='flex gap-3'>
                <Arow1/>
                <div className='flex flex-col gap-2'>
                    <h2>{ firstTopic}</h2>
                    <h2>{ secoundTopic}</h2>
                </div>
              </div>
            </div>
    </>)
}