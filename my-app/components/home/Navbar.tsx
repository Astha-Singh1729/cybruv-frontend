import Link from "next/link";
//navitem
type NavItemProps = { text: string, href: string }
const NavItem = ({ text, href }: NavItemProps) => {
    return (
        <div style={{ padding: '0 2vw' }}>
            <Link href={href} className="link" style={{ fontSize: '3vh' }}>
                {text}
            </Link>
        </div>

    );
};

const Navbar = () => {
    return (
        <div style={{ display: 'flex', alignContent: 'center' }}>
            <header style={{ display: 'flex', height: '11vh', width: '95vw', margin: 'auto', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2vw' }}>
                        <Link href="/" className="cybros" style={{ fontSize: '3vh' }}>
                            CYBROS
                        </Link>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', float: 'right' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
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