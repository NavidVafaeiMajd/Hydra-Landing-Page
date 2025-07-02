import { ButtonSecondary } from "./Buttons";

export default function Form() {
    return (<>
        <div id="form" className="md:p-20 p-5 shadow shadow-md">
            <div className="font-bold text-center"><h2>JOIN HYDRA</h2></div>
            <div className="h-[1px] w-[50%] m-auto bg-linear-to-r from-back via-primary to-back my-5"></div>
            <div className="text-center"><h2>Let’s Build Your VR Experience</h2></div>

            <form className="mt-10">
                <div className="grid md:grid-cols-2 gap-2">
                    <div>
                        <input type="text" placeholder="First Name" className="" id="first-name" />
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name" className="" id="last-name" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" className="" id="email" />
                    </div>
                                        <div>
                        <input type="number" placeholder="Phone Number" className="" id="phone-number" />
                    </div>

                </div>
                <div>
                        <input type="text" placeholder="Subject" className="" id="subject" />
                </div>
                <div>
                    <textarea placeholder="Tell Us Something..." className="min-h-[200px]"></textarea>
                </div>
                <div className="flex justify-center mt-5">
                    <ButtonSecondary type="submit" content="SEND TO HYDRA"/>
                </div>
            </form>
        </div>
    </>)
}