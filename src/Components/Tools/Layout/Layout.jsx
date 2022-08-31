import { useEffect } from "react"

//named export - da der er flere funktioner i den
const Layout = props => {
    useEffect(() => {
        document.title = props.title
        if (props.description) {
            document.querySelector('meta[name="description"]')
                .setAttribute("content", props.description)
        }
        //Hvis props ændres - render siden
    }, [props.title, props.description])

    return (
        <>
            <h1 className="layoutTitle">{props.title}</h1>
            {props.subtitle && (
                <h2 className="layoutSubtitle">{props.subtitle}</h2>
            )}
            <ContentWrapper>{props.children}</ContentWrapper>
        </>
    )
}
const ContentWrapper = props => {
    return (
        <div className="layoutContainer">
            {props.children}
        </div>
    )
}

export { Layout, ContentWrapper }