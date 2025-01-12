import { IconChevronLeft, IconSmartHome } from "@tabler/icons-react"
import { memo } from "react"
import { useNavigate } from "react-router-dom"

type HeaderProps = { title: string, back?: boolean, home?: boolean }

export const Header = memo(({ title = "", back = true, home = true }: HeaderProps) => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const goHome = () => navigate("/")

    return <div className="w-full flex h-16 justify-center items-center relative">
        {back && <button className="w-16 h-16 flex justify-center items-center absolute top-0 left-0"
            onClick={goBack}
            aria-label="back">
            <IconChevronLeft stroke={2} size={32} />
        </button>}
        {home && <button className="w-16 h-16 flex justify-center items-center absolute top-0 right-0"
            onClick={goHome}
            aria-label="home">
            <IconSmartHome stroke={2} size={32} />
        </button>}
        <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
    </div>
})