export const formatDate =  (date: Date): string => {
    const dateFormatter = Intl.DateTimeFormat("ru")
    return dateFormatter.format(date)
}