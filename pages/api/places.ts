import { IPlace } from "@/app/types/place"
import japanImg from '@/assets/images/japan.webp'
import { NextApiRequest, NextApiResponse } from "next"

const places: IPlace[] = [
    {
        slug: 'Tokyo',
        location: 'Japan',
        image: japanImg.src,
        description: 'asdfasdfasdfasdf',
        rating: 8.1,
        duration: 'qwerqewr',
        distance: 10456,
        googleMapLink: 'asdfasdf',
        mapImage: 'asdfasdf'
    }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}