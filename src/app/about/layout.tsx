import './../../app/globals.css'
export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="noScrollBar flex flex-col justify-center items-center">
                {children}
            </div>
        </>
    );
}
