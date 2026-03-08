function ItemCard() {

    const itemInfo = {
        img: '',
        name: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
        owner: '@auvaro2',
        original_price: '200',
        price: '100',
        interest: '33'
    }

    return (
        <div className="w-full flex flex-col gap-2 cursor-pointer hover:shadow-lg rounded-xl">
            <div className="w-full h-50 flex justify-center items-center bg-gray-100 rounded-xl" ><p>Placeholder</p></div>
            <div className="flex flex-col gap-1 px-2 py-3">
                <h3 className="font-medium">{itemInfo.name}</h3>
                <h1 className="font-bold text-bluePrincipal text-2xl"> <span className="text-sm">R$</span>{itemInfo.price}</h1>
                <p className="text-xs text-gray-500">{itemInfo.interest} Pessoas interessadas</p>
                <p className="text-sm text-gray-500">{itemInfo.owner}</p>
            </div>
        </div>
    )
}

export default ItemCard;