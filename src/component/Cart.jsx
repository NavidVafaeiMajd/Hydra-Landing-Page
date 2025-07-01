import { ButtonSecondary } from "./Buttons";

export default function Cart({imgLink , title , children}) {
    return (
        <>
            <div className="cart">
              <div className="cart-img">
                <img className='w-60 h-60 rounded-full border border-15 border-black/30' src={imgLink} alt="" />
              </div>
              <div className="cart-title">
                <h2>
                  {title}
                </h2>
              </div>
              <div className='break'></div>
              <div className="cart-des">
                <p className='text-sm'>
                  {children}
                </p>
              </div>
              <div className="cart-btn">
                <ButtonSecondary className="flex justify-center" content="TRY IT NOW" />
              </div>
            </div>
        </>
    )
}