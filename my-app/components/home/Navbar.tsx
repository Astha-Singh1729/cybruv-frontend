import Link from "next/link";
//navitem
type NavItemProps = { text: string, href: string }
const NavItem = ({ text, href }: NavItemProps) => {
    return (
        <div>
            <Link href={href} className="link" style={{ fontSize: '3vh' }}>
                {text}
            </Link>
        </div>

    );
};

const Navbar = () => {
    return (
        <div style={{ display: 'flex', alignContent: 'center' }}>
            <header style={{ display: 'flex', height: '11vh', width: '70vw', margin: 'auto', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '4vw' }}>
                        <Link href="/" className="cybros" style={{ fontSize: '4vh' }}>
                            CYBROS
                        </Link>
                    </div>
                </div>
                <div style={{ width: '15vw', display: 'flex', alignItems: 'center', float: 'right' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                        <NavItem href='/' text="Home" />
                        <NavItem href='/plinth' text="Plinth" />
                        {/* <NavItem href='/announcements' text="Announcements" /> */}
                    </div>
                </div>
            </header>
        </div>

    );
};

export default Navbar;