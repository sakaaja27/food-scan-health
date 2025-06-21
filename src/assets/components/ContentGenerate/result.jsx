import { ArrayResult } from "../../ArrayResult"
export default function ResultGenerate() {
    return (
        <div className="grid place-items-center mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-12 md:gap-x-6">
                {ArrayResult.map((item) => {
                    console.log(item);
                    return (
                        <div key={item.id} className={`flex flex-col items-center ${item.backgroundCard} shadow-lg w-44 h-40 rounded-lg`}>
                            <img src={item.iconImage} className="h-16 object-contain"/>
                            <p className="text-center font-bold text-gray-700 font-mono">{item.description}</p>
                            <p className="text-3xl font-bold text-gray-700">{item.value} g</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}