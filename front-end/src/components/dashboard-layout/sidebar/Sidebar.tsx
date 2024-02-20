import { COLORS } from "@/constants/color.constants";
import { GanttChartSquare } from "lucide-react";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";
import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";

export function Sidebar() {
    return <aside className="border-r border-r-border h-full bg-sidebar flex flex-col justify-between">
        <div>
            <Link href='/i' draggable={false} className="flex items-center gap-2.5 p-layout border-b border-b-border">
                <GanttChartSquare color={COLORS.primary} size={38} />
                <span className="text-2xl font-bold relative">React Planner</span>
            </Link>
            <div className="p-3 relative">
                <LogoutButton />
                {MENU.map(item => (
                    <MenuItem item={item} key={item.link} />
                ))}
            </div>
        </div>
        <footer className='text-xs opacity-40 font-normal text-center p-layout'>
            2024 &copy; By{' '}
            <p
                className='hover:text-primary text-brand-300 transition-colors'
            >
                YehorShap
            </p>
            <br /> All rights reserved.
        </footer>
    </aside>
}
