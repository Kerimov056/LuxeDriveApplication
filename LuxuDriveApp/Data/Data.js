import { faker } from '@faker-js/faker';

const DATA = Array(20).fill(null).map((e) => ({
    id: faker.string.uuid(),
    avatar: faker.image.avatarLegacy(),
    name: faker.internet.userName(),
}))
expo


export const mainCarData = [
    {
        image: 'https://i.pinimg.com/736x/c1/04/79/c10479f256bbbf06d3825ad4de726ff1.jpg',
        name: 'BMW - m3 ',
        desc: 'Exercises that raise core temperature and increase cardiovascular activity.',
        categories: 'Sport',
        price: '$143'

    },
    {
        image: 'https://i.pinimg.com/564x/54/6b/9e/546b9e2abede0ec06d2dd771843f2017.jpg',
        name: 'BMW - m3 ',
        desc: 'Exercises that raise core temperature and increase cardiovascular activity.',
        categories: 'Sport',
        price: '$233'

    },
    {
        image: 'https://i.pinimg.com/564x/fe/55/e9/fe55e9f5c74339e73a6171f3f84106de.jpg',
        name: 'BMW - m3 ',
        desc: 'Exercises that raise core temperature and increase cardiovascular activity.',
        categories: 'Sport',
        price: '$423'

    },
    {
        image: 'https://i.pinimg.com/564x/94/5d/7c/945d7cc648dd5d9c37ef84bf9d361e19.jpg',
        name: 'BMW - m3 ',
        desc: 'Exercises that raise core temperature and increase cardiovascular activity.',
        categories: 'Sport',
        price: '$125'

    },
    {
        image: 'https://i.pinimg.com/564x/22/16/e9/2216e94d482c88287ed49deafa6da632.jpg',
        name: 'BMW - m3 ',
        desc: 'Exercises that raise core temperature and increase cardiovascular activity.',
        categories: 'Sport',
        price: '$200'

    },
    {
        image: 'https://i.pinimg.com/736x/92/07/53/92075334654bb91ca1ed50bfca3f546a.jpg',
        name: 'BMW - m3 ',
        desc: 'Exercises that raise core temperature and increase cardiovascular activity.',
        categories: 'Sport',
        price: '$300'
    },
];


export const cars = [
    {
        lat: 40.382957,
        lng: 49.806150,
        title: 'Mekan 1',
        description: 'Salam Burda Sizin zovqunuz uygun her bir masin var.',
        image: 'https://i.pinimg.com/736x/c1/04/79/c10479f256bbbf06d3825ad4de726ff1.jpg',
    },
    {
        lat: 40.399519,
        lng: 49.829924,
        title: 'Mekan 2',
        description: 'Salam Burda Sizin zovqunuz uygun her bir masin var.',
        image: 'https://i.pinimg.com/564x/54/6b/9e/546b9e2abede0ec06d2dd771843f2017.jpg',
    },
    {
        lat: 40.382255,
        lng: 49.832319,
        title: 'Mekan 3',
        description: 'Salam Burda Sizin zovqunuz uygun her bir masin var.',
        image: 'https://i.pinimg.com/564x/fe/55/e9/fe55e9f5c74339e73a6171f3f84106de.jpg',
    },
];



export const Google_Maps_Api_Key = 'AIzaSyCs2aJhlTdKjfTiQZ5kNP2-3QMNzPuLf7o';
export const UNSPLASH_API_KEY = '7VpM8-RI2TsEMiiJ35HwcXUayF_nImX6z5VVpU75dVo';
