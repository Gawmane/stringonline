import { SubNav } from "./SubNav"

export const Main = (props) => {
        return (
                <>
                        {/* De børn der er af component der er i main er dem der skal vises i route */}
                        {props.children}
                        <SubNav />
                </>
        )
}