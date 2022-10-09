
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1><Link href="/">VTB</Link></h1>
            </div>
            <Link href="/courses"><a>Курсы</a></Link>
            <Link href="/activity"><a>Активность</a></Link>
            <Link href="/market"><a>Маркетплэйс</a></Link>
            <Link href="/tokens"><a>Мои токены</a></Link>
        </nav>
    );
}

export default Navbar;

