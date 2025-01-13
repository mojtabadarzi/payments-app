export const convertToShortDate = (date: string) => {
    try {
        return Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }).format(new Date(date))
    } catch {
        return "N/A"
    }
}

export const convertToLongDate = (date: string) => {
    try {
        return Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        }).format(new Date(date))
    } catch {
        return "N/A"
    }
}