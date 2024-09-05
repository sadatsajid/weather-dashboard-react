import { Helmet } from "react-helmet-async";

interface PageHelmentProps {
    title: string;
}

function PageHelmet({ title }: PageHelmentProps) {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
}

export default PageHelmet;