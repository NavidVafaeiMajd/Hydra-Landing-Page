const HamburgerButton = ({onClick}) => {
    return (<>

<svg onClick={onClick} className="md:hidden w-10" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="33" height="3.71429" rx="1.85714" fill="url(#paint0_linear_13_83)"/>
<rect y="22.2857" width="33" height="3.71429" rx="1.85714" fill="url(#paint1_linear_13_83)"/>
<rect x="9" y="11.1429" width="24" height="3.71429" rx="1.85714" fill="url(#paint2_linear_13_83)"/>
<defs>
<linearGradient id="paint0_linear_13_83" x1="-8.62252e-09" y1="3.46667" x2="36.0395" y2="3.46666" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0B7E8"/>
<stop offset="1" stop-color="#8176AF"/>
</linearGradient>
<linearGradient id="paint1_linear_13_83" x1="-3.90789" y1="26" x2="33" y2="26" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0B7E8"/>
<stop offset="1" stop-color="#8176AF"/>
</linearGradient>
<linearGradient id="paint2_linear_13_83" x1="5.21062" y1="13" x2="33.0001" y2="13" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0B7E8"/>
<stop offset="1" stop-color="#8176AF"/>
</linearGradient>
</defs>
</svg>

    
    </>);
}
 
export default HamburgerButton ;