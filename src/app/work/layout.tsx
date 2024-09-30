import RotatingCubeArray from "../components/RotatingCubeArray";
import { SafeAreaLayout } from "../components/SafeAreaLayout";

import './../../app/globals.css'
export default function WorkLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SafeAreaLayout>
                {children}
            </SafeAreaLayout>


        </>


    );
}
