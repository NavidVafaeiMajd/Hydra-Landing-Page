export default function Form() {
    return (<>
        <div id="form" className="p-20 shadow shadow-md">
            <div className="font-bold text-center"><h2>JOIN HYDRA</h2></div>
            <div className="break-shadow"></div>
            <div className="text-center"><h2>Let’s Build Your VR Experience</h2></div>

            <form >
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <input type="text" placeholder="First Name" className="" id="first-name" />
                    </div>
                    <div>
                        <input type="text" placeholder="First Name" className="" id="first-name" />
                    </div>
                                        <div>
                        <input type="text" placeholder="First Name" className="" id="first-name" />
                    </div>
                                        <div>
                        <input type="text" placeholder="First Name" className="" id="first-name" />
                    </div>
                </div>
                <div>
                        <input type="text" placeholder="First Name" className="" id="first-name" />
                </div>
                <div>
                    <input type="" placeholder="First Name" className="" id="first-name" />
                    <textarea placeholder="Tell Us Something..." className="min-h-[200px]"></textarea>
                </div>
            </form>
        </div>
    </>)
}