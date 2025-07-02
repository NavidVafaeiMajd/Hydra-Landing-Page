export const ButtonPrimary = ({content}) => {
    return (<>
        <div className="w-full min-w-40">
            <button className="w-full rounded-full! bg-transparent! text-white! border border-white!">
                {content}
            </button>
        </div>
    </>);
}
 
  ButtonPrimary;

export const ButtonSecondary = ({content ,type}) => {
    return (<>
        <div className="w-full min-w-40 ">
            <button type={type} className="w-full rounded-full! bg-gradient-to-r from-primary to-secondary text-black! border-white! border-none!">
                {content}
            </button>
        </div>
    </>);
}
 
  ButtonSecondary;