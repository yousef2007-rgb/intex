import {intro as Intro} from '@/components/intro';
import {body as Body} from './body'
import { shopByAge as ShopByAge } from "./shopByAge";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col ">
            <Intro />
            <ShopByAge />
            <Body />
        </main>
    )
}
