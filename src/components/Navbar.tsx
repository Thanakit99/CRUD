import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar" aria-label="เมนูหลัก">
            <ul className="navList flex gap-6 items-center list-none p-4">
                <li>
                    <Link className="navLink hover:text-blue-500 transition-colors" href="/">
                        หน้าแรก
                    </Link>
                </li>
                <li>
                    <Link className="navLink hover:text-blue-500 transition-colors" href="/courses">
                        รายวิชา
                    </Link>
                </li>
                <li>
                    <Link className="navLink hover:text-blue-500 transition-colors" href="/games">
                        รายการเกม
                    </Link>
                </li>
                <li>
                    <Link className="navLink hover:text-blue-500 transition-colors" href="/about">
                        เกี่ยวกับ
                    </Link>
                </li>
                <li>
                    <Link className="navLink hover:text-blue-500 transition-colors" href="/favorite_bands">
                        วงดนตรีที่ชื่นชอบ
                    </Link>
                </li>
            </ul>
        </nav>
    );
}